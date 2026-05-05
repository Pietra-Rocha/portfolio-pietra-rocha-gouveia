import { ScrollView, Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ScreenContainer } from "@/components/screen-container";
import { useColors } from "@/hooks/use-colors";
import { cn } from "@/lib/utils";

/**
 * Home Screen - TechAssist Remote
 *
 * Tela inicial que permite ao usuário escolher entre:
 * 1. Iniciar Suporte (como técnico)
 * 2. Receber Suporte (como usuário)
 */
export default function HomeScreen() {
  const router = useRouter();
  const colors = useColors();
  const [showRoomInput, setShowRoomInput] = useState(false);
  const [roomName, setRoomName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInitiateSupport = () => {
    // Navegar para tela de acesso à sala (técnico iniciando suporte)
    router.push("/room-access");
  };

  const handleReceiveSupport = () => {
    // Mostrar input para entrar em sala existente
    setShowRoomInput(true);
  };

  const handleEnterRoom = () => {
    if (!roomName.trim()) {
      Alert.alert("Erro", "Por favor, insira o nome da sala");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push({
        pathname: "/call",
        params: { roomName: roomName.trim() },
      });
    }, 300);
  };

  const handleBackFromInput = () => {
    setShowRoomInput(false);
    setRoomName("");
  };

  if (showRoomInput) {
    return (
      <ScreenContainer className="p-6">
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
          <View className="flex-1 gap-8 justify-center">
            {/* Header */}
            <View className="items-center gap-2">
              <Text className="text-3xl font-bold text-foreground">Receber Suporte</Text>
              <Text className="text-base text-muted text-center">
                Insira o nome da sala fornecido pelo técnico
              </Text>
            </View>

            {/* Room Input Form */}
            <View className="gap-6">
              <View className="gap-2">
                <Text className="text-sm font-semibold text-foreground">Nome da Sala</Text>
                <TextInput
                  placeholder="Ex: Suporte-001"
                  placeholderTextColor={colors.muted}
                  value={roomName}
                  onChangeText={setRoomName}
                  editable={!isLoading}
                  returnKeyType="done"
                  onSubmitEditing={handleEnterRoom}
                  className="px-4 py-3 rounded-lg border text-foreground"
                  style={{
                    borderColor: colors.border,
                    backgroundColor: colors.surface,
                    color: colors.foreground,
                  }}
                />
              </View>

              {/* Enter Button */}
              <TouchableOpacity
                onPress={handleEnterRoom}
                disabled={isLoading || !roomName.trim()}
                className={cn(
                  "py-4 rounded-lg items-center justify-center",
                  isLoading || !roomName.trim() ? "opacity-50" : ""
                )}
                style={{
                  backgroundColor: isLoading || !roomName.trim() ? colors.muted : colors.primary,
                }}
              >
                <Text className="text-lg font-semibold text-background">
                  {isLoading ? "Conectando..." : "Entrar na Sala"}
                </Text>
              </TouchableOpacity>

              {/* Back Button */}
              <TouchableOpacity
                onPress={handleBackFromInput}
                disabled={isLoading}
                className="py-3 rounded-lg items-center justify-center border"
                style={{ borderColor: colors.border }}
              >
                <Text className="text-base font-semibold text-foreground">Voltar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer className="p-6">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <View className="flex-1 gap-8 justify-center">
          {/* Hero Section */}
          <View className="items-center gap-4">
            {/* Ícone/Logo */}
            <View
              className="w-20 h-20 rounded-full items-center justify-center"
              style={{ backgroundColor: colors.primary }}
            >
              <Text className="text-4xl">📞</Text>
            </View>

            {/* Título */}
            <Text className="text-4xl font-bold text-foreground text-center">
              TechAssist Remote
            </Text>

            {/* Subtítulo */}
            <Text className="text-base text-muted text-center leading-relaxed">
              Suporte técnico remoto com ferramentas visuais para guiar usuários
            </Text>
          </View>

          {/* Action Buttons */}
          <View className="gap-4">
            {/* Initiate Support Button */}
            <TouchableOpacity
              onPress={handleInitiateSupport}
              className="py-4 rounded-lg items-center justify-center"
              style={{ backgroundColor: colors.primary }}
            >
              <Text className="text-lg font-semibold text-background">🚀 Iniciar Suporte</Text>
            </TouchableOpacity>

            {/* Receive Support Button */}
            <TouchableOpacity
              onPress={handleReceiveSupport}
              className="py-4 rounded-lg items-center justify-center border"
              style={{ borderColor: colors.primary, borderWidth: 2 }}
            >
              <Text className="text-lg font-semibold text-primary">📥 Receber Suporte</Text>
            </TouchableOpacity>
          </View>

          {/* Info Section */}
          <View className="gap-4 bg-surface rounded-2xl p-6 border" style={{ borderColor: colors.border }}>
            <Text className="text-sm font-semibold text-foreground">Como funciona?</Text>
            <View className="gap-3">
              <View className="flex-row gap-3">
                <Text className="text-lg">🔧</Text>
                <Text className="flex-1 text-sm text-muted leading-relaxed">
                  <Text className="font-semibold text-foreground">Técnico:</Text> Clique em "Iniciar Suporte" para criar uma sala
                </Text>
              </View>
              <View className="flex-row gap-3">
                <Text className="text-lg">👤</Text>
                <Text className="flex-1 text-sm text-muted leading-relaxed">
                  <Text className="font-semibold text-foreground">Usuário:</Text> Clique em "Receber Suporte" e insira o código da sala
                </Text>
              </View>
              <View className="flex-row gap-3">
                <Text className="text-lg">✏️</Text>
                <Text className="flex-1 text-sm text-muted leading-relaxed">
                  <Text className="font-semibold text-foreground">Anotações:</Text> Use ferramentas visuais durante a chamada
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
