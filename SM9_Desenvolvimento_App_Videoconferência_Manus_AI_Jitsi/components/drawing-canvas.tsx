import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity, Dimensions, PanResponder } from "react-native";
import { useColors } from "@/hooks/use-colors";

export type DrawingTool = "pen" | "circle" | "rectangle" | "pointer";

interface DrawingPoint {
  x: number;
  y: number;
}

interface DrawingAction {
  id: string;
  type: "path" | "circle" | "rectangle" | "pointer";
  points?: DrawingPoint[];
  startPoint?: DrawingPoint;
  endPoint?: DrawingPoint;
  color: string;
}

interface DrawingCanvasProps {
  visible: boolean;
  onClose: () => void;
}

/**
 * DrawingCanvas - Componente para anotações em tela
 *
 * Fornece ferramentas de desenho livre, destaque com formas,
 * e indicador de toque para suporte remoto visual.
 */
export function DrawingCanvas({ visible, onClose }: DrawingCanvasProps) {
  const colors = useColors();
  const canvasRef = useRef(null);
  const [tool, setTool] = useState<DrawingTool>("pen");
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentPath, setCurrentPath] = useState<DrawingPoint[]>([]);
  const [actions, setActions] = useState<DrawingAction[]>([]);
  const [startPoint, setStartPoint] = useState<DrawingPoint | null>(null);

  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height * 0.75;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (evt) => {
        const { locationX: x, locationY: y } = evt.nativeEvent;
        setIsDrawing(true);
        setStartPoint({ x, y });
        if (tool === "pen") {
          setCurrentPath([{ x, y }]);
        }
      },
      onPanResponderMove: (evt) => {
        if (!isDrawing) return;
        const { locationX: x, locationY: y } = evt.nativeEvent;

        if (tool === "pen") {
          setCurrentPath((prev) => [...prev, { x, y }]);
        }
      },
      onPanResponderRelease: (evt) => {
        const { locationX: x, locationY: y } = evt.nativeEvent;
        setIsDrawing(false);

        if (tool === "pen" && currentPath.length > 0) {
          setActions((prev) => [
            ...prev,
            {
              id: Date.now().toString(),
              type: "path",
              points: currentPath,
              color: colors.primary,
            },
          ]);
          setCurrentPath([]);
        } else if (tool === "circle" && startPoint) {
          setActions((prev) => [
            ...prev,
            {
              id: Date.now().toString(),
              type: "circle",
              startPoint,
              endPoint: { x, y },
              color: colors.primary,
            },
          ]);
        } else if (tool === "rectangle" && startPoint) {
          setActions((prev) => [
            ...prev,
            {
              id: Date.now().toString(),
              type: "rectangle",
              startPoint,
              endPoint: { x, y },
              color: colors.primary,
            },
          ]);
        } else if (tool === "pointer") {
          setActions((prev) => [
            ...prev,
            {
              id: Date.now().toString(),
              type: "pointer",
              startPoint: startPoint || { x, y },
              endPoint: { x, y },
              color: colors.primary,
            },
          ]);
        }

        setStartPoint(null);
      },
    })
  ).current;

  const handleClear = () => {
    setActions([]);
    setCurrentPath([]);
  };

  const handleUndo = () => {
    setActions((prev) => prev.slice(0, -1));
  };

  if (!visible) return null;

  return (
    <View className="absolute inset-0 bg-black bg-opacity-50 z-50">
      {/* Canvas Area */}
      <View
        {...panResponder.panHandlers}
        className="flex-1 bg-black relative"
        style={{ width: screenWidth, height: screenHeight }}
        ref={canvasRef}
      >
        {/* Renderizar ações de desenho */}
        {actions.map((action) => {
          if (action.type === "circle" && action.startPoint && action.endPoint) {
            const radius = Math.sqrt(
              Math.pow(action.endPoint.x - action.startPoint.x, 2) +
                Math.pow(action.endPoint.y - action.startPoint.y, 2)
            );
            return (
              <View
                key={action.id}
                style={{
                  position: "absolute",
                  left: action.startPoint.x - radius,
                  top: action.startPoint.y - radius,
                  width: radius * 2,
                  height: radius * 2,
                  borderRadius: radius,
                  borderWidth: 2,
                  borderColor: action.color,
                }}
              />
            );
          }

          if (action.type === "rectangle" && action.startPoint && action.endPoint) {
            return (
              <View
                key={action.id}
                style={{
                  position: "absolute",
                  left: Math.min(action.startPoint.x, action.endPoint.x),
                  top: Math.min(action.startPoint.y, action.endPoint.y),
                  width: Math.abs(action.endPoint.x - action.startPoint.x),
                  height: Math.abs(action.endPoint.y - action.startPoint.y),
                  borderWidth: 2,
                  borderColor: action.color,
                }}
              />
            );
          }

          if (action.type === "pointer" && action.startPoint && action.endPoint) {
            return (
              <View
                key={action.id}
                style={{
                  position: "absolute",
                  left: action.endPoint.x - 15,
                  top: action.endPoint.y - 15,
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  borderWidth: 2,
                  borderColor: action.color,
                  backgroundColor: "transparent",
                }}
              />
            );
          }

          return null;
        })}
      </View>

      {/* Tool Bar */}
      <View
        className="flex-row items-center justify-between px-4 py-3 gap-2 flex-wrap"
        style={{ backgroundColor: colors.surface, borderTopColor: colors.border, borderTopWidth: 1 }}
      >
        {/* Tool Selection */}
        <View className="flex-row gap-2 flex-1">
          <TouchableOpacity
            onPress={() => setTool("pen")}
            className={`px-3 py-2 rounded-lg ${tool === "pen" ? "bg-primary" : "bg-border"}`}
          >
            <Text className={`text-xs font-semibold ${tool === "pen" ? "text-background" : "text-foreground"}`}>
              🖌️
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setTool("circle")}
            className={`px-3 py-2 rounded-lg ${tool === "circle" ? "bg-primary" : "bg-border"}`}
          >
            <Text className={`text-xs font-semibold ${tool === "circle" ? "text-background" : "text-foreground"}`}>
              ⭕
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setTool("rectangle")}
            className={`px-3 py-2 rounded-lg ${tool === "rectangle" ? "bg-primary" : "bg-border"}`}
          >
            <Text className={`text-xs font-semibold ${tool === "rectangle" ? "text-background" : "text-foreground"}`}>
              ◻️
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setTool("pointer")}
            className={`px-3 py-2 rounded-lg ${tool === "pointer" ? "bg-primary" : "bg-border"}`}
          >
            <Text className={`text-xs font-semibold ${tool === "pointer" ? "text-background" : "text-foreground"}`}>
              👆
            </Text>
          </TouchableOpacity>
        </View>

        {/* Action Buttons */}
        <View className="flex-row gap-2">
          <TouchableOpacity onPress={handleUndo} className="px-3 py-2 rounded-lg bg-warning">
            <Text className="text-xs font-semibold text-background">↶</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleClear} className="px-3 py-2 rounded-lg bg-error">
            <Text className="text-xs font-semibold text-background">🗑️</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onClose} className="px-3 py-2 rounded-lg bg-muted">
            <Text className="text-xs font-semibold text-background">✕</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
