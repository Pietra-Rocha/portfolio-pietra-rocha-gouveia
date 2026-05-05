import { View, Text } from "react-native";
import { useColors } from "@/hooks/use-colors";
import { cn } from "@/lib/utils";

interface MobileSimulatorProps {
  children: React.ReactNode;
  title?: string;
}

/**
 * Mobile Simulator Component
 *
 * Renderiza o conteúdo em um simulador mobile visual para visualização
 * em desktop/notebook. Mostra um frame de iPhone com notch.
 */
export function MobileSimulator({ children, title }: MobileSimulatorProps) {
  const colors = useColors();

  return (
    <View className="flex-1 items-center justify-center p-4" style={{ backgroundColor: colors.background }}>
      {/* Desktop Preview Container */}
      <View className="max-w-sm w-full">
        {/* Title */}
        {title && (
          <View className="mb-4 items-center">
            <Text className="text-lg font-semibold text-foreground">{title}</Text>
            <Text className="text-xs text-muted mt-1">Visualização Mobile</Text>
          </View>
        )}

        {/* iPhone Frame */}
        <View
          className="rounded-3xl overflow-hidden border-8 shadow-lg"
          style={{
            borderColor: "#000",
            backgroundColor: "#000",
            aspectRatio: 9 / 16 as any,
            maxHeight: 600,
          }}
        >
          {/* Notch */}
          <View
            className="absolute top-0 left-1/2 -translate-x-1/2 z-10 rounded-b-3xl"
            style={{
              width: "40%",
              height: 28,
              backgroundColor: "#000",
            }}
          />

          {/* Screen Content */}
          <View className="flex-1 bg-background">{children}</View>

          {/* Home Indicator */}
          <View
            className="items-center justify-center"
            style={{
              height: 24,
              backgroundColor: "#000",
            }}
          >
            <View
              style={{
                width: 120,
                height: 4,
                backgroundColor: "#333",
                borderRadius: 2,
              }}
            />
          </View>
        </View>

        {/* Info Text */}
        <View className="mt-4 items-center">
          <Text className="text-xs text-muted text-center">
            Use esta visualização para testar o app no seu notebook
          </Text>
        </View>
      </View>
    </View>
  );
}
