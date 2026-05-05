import { View, Text, TouchableOpacity, Alert, SafeAreaView } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState, useRef, useEffect } from "react";
import { WebView } from "react-native-webview";
import { useColors } from "@/hooks/use-colors";
import { DrawingCanvas } from "@/components/drawing-canvas";

/**
 * Call Screen - Tela de Videoconferência
 *
 * Integra o Jitsi Meet via WebView e fornece ferramentas
 * de anotação em tela para suporte remoto.
 */
export default function CallScreen() {
  const router = useRouter();
  const { roomName } = useLocalSearchParams<{ roomName: string }>();
  const colors = useColors();
  const webViewRef = useRef(null);
  const [isConnected, setIsConnected] = useState(false);
  const [showDrawingCanvas, setShowDrawingCanvas] = useState(false);

  if (!roomName) {
    return (
      <SafeAreaView className="flex-1 bg-background items-center justify-center">
        <Text className="text-foreground">Erro: Nome da sala não fornecido</Text>
        <TouchableOpacity
          onPress={() => router.back()}
          className="mt-4 px-6 py-2 rounded-lg"
          style={{ backgroundColor: colors.primary }}
        >
          <Text className="text-background font-semibold">Voltar</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  // URL do Jitsi Meet - usando a instância pública
  const jitsiUrl = `https://meet.jit.si/${encodeURIComponent(roomName)}`;

  const handleWebViewMessage = (event: any) => {
    try {
      const data = JSON.parse(event.nativeEvent.data);
      if (data.type === "ready") {
        setIsConnected(true);
      }
    } catch (e) {
      // Ignorar erros de parsing
    }
  };

  const handleHangup = () => {
    Alert.alert(
      "Sair da Chamada",
      "Tem certeza que deseja sair da videoconferência?",
      [
        { text: "Cancelar", onPress: () => {} },
        {
          text: "Sair",
          onPress: () => {
            router.back();
          },
          style: "destructive",
        },
      ]
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      {/* Jitsi Meet WebView */}
      <View className="flex-1">
        <WebView
          ref={webViewRef}
          source={{ uri: jitsiUrl }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
          onMessage={handleWebViewMessage}
          style={{ flex: 1 }}
        />
      </View>

      {/* Control Bar */}
      <View
        className="flex-row items-center justify-between px-4 py-3 border-t"
        style={{ backgroundColor: colors.surface, borderColor: colors.border }}
      >
        {/* Room Info */}
        <View className="flex-1">
          <Text className="text-xs text-muted">Sala:</Text>
          <Text className="text-sm font-semibold text-foreground">{roomName}</Text>
        </View>

        {/* Annotation Tools Button */}
        <TouchableOpacity
          onPress={() => setShowDrawingCanvas(!showDrawingCanvas)}
          className="px-4 py-2 rounded-lg mx-2"
          style={{
            backgroundColor: showDrawingCanvas ? colors.primary : colors.border,
          }}
        >
          <Text
            className="text-sm font-semibold"
            style={{ color: showDrawingCanvas ? colors.background : colors.foreground }}
          >
            ✏️ Anotar
          </Text>
        </TouchableOpacity>

        {/* Hangup Button */}
        <TouchableOpacity
          onPress={handleHangup}
          className="px-4 py-2 rounded-lg bg-error"
        >
          <Text className="text-sm font-semibold text-background">Sair</Text>
        </TouchableOpacity>
      </View>

      {/* Drawing Canvas Overlay */}
      <DrawingCanvas visible={showDrawingCanvas} onClose={() => setShowDrawingCanvas(false)} />
    </SafeAreaView>
  );
}
