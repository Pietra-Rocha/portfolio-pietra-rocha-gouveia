import { ScrollView, Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ScreenContainer } from "@/components/screen-container";
import { useColors } from "@/hooks/use-colors";
import { MobileSimulator } from "@/components/mobile-simulator";
import { cn } from "@/lib/utils";

/**
 * Web Preview Screen
 *
 * Página de preview para visualização do aplicativo no navegador
 * do notebook/desktop. Mostra um simulador mobile com o app.
 */
export default function WebPreviewScreen() {
  const router = useRouter();
  const colors = useColors();
  const [currentScreen, setCurrentScreen] = useState<"home" | "room-access" | "receive-support">("home");
  const [roomName, setRoomName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInitiateSupport = () => {
    console.log("Navigating to room-access");
    setCurrentScreen("room-access");
  };

  const handleReceiveSupport = () => {
    console.log("Navigating to receive-support");
    setCurrentScreen("receive-support");
  };

  const handleBackToHome = () => {
    console.log("Going back to home");
    setCurrentScreen("home");
    setRoomName("");
  };

  const handleCreateRoom = () => {
    console.log("Creating room:", roomName);
    if (!roomName.trim()) {
      Alert.alert("Erro", "Por favor, insira um nome para a sala");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      Alert.alert("Sucesso", `Sala "${roomName}" criada! Agora você seria redirecionado para a videoconferência.`);
    }, 500);
  };

  const handleEnterRoom = () => {
    console.log("Entering room:", roomName);
    if (!roomName.trim()) {
      Alert.alert("Erro", "Por favor, insira o nome da sala");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      Alert.alert("Sucesso", `Conectando à sala "${roomName}"...`);
    }, 500);
  };

  const handleGenerateRoomName = () => {
    const randomId = Math.random().toString(36).substring(2, 8).toUpperCase();
    setRoomName(`Suporte-${randomId}`);
    console.log("Generated room name");
  };

  // Renderizar conteúdo baseado na tela atual
  const renderScreenContent = () => {
    switch (currentScreen) {
      case "room-access":
        return (
          <ScreenContainer className="p-6">
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
              <View className="flex-1 gap-8 justify-center">
                {/* Header */}
                <View className="items-center gap-2">
                  <Text className="text-3xl font-bold text-foreground">Criar Sala de Suporte</Text>
                  <Text className="text-base text-muted text-center">
                    Defina um nome único para a sala
                  </Text>
                </View>

                {/* Room Name Input */}
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
                      onSubmitEditing={handleCreateRoom}
                      className="px-4 py-3 rounded-lg border text-foreground"
                      style={{
                        borderColor: colors.border,
                        backgroundColor: colors.surface,
                        color: colors.foreground,
                      }}
                    />
                  </View>

                  {/* Generate Random Name Button */}
                  <TouchableOpacity
                    onPress={handleGenerateRoomName}
                    disabled={isLoading}
                    className="py-3 rounded-lg items-center justify-center border"
                    style={{ borderColor: colors.primary }}
                  >
                    <Text className="text-base font-semibold text-primary">🎲 Gerar Nome Aleatório</Text>
                  </TouchableOpacity>

                  {/* Create Room Button */}
                  <TouchableOpacity
                    onPress={handleCreateRoom}
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
                      {isLoading ? "Criando Sala..." : "✅ Criar Sala"}
                    </Text>
                  </TouchableOpacity>

                  {/* Back Button */}
                  <TouchableOpacity
                    onPress={handleBackToHome}
                    disabled={isLoading}
                    className="py-3 rounded-lg items-center justify-center border"
                    style={{ borderColor: colors.border }}
                  >
                    <Text className="text-base font-semibold text-foreground">← Voltar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </ScreenContainer>
        );

      case "receive-support":
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
                    onPress={handleBackToHome}
                    disabled={isLoading}
                    className="py-3 rounded-lg items-center justify-center border"
                    style={{ borderColor: colors.border }}
                  >
                    <Text className="text-base font-semibold text-foreground">← Voltar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </ScreenContainer>
        );

      case "home":
      default:
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
                        <Text className="font-semibold text-foreground">Técnico:</Text> Clique em "Iniciar Suporte"
                      </Text>
                    </View>
                    <View className="flex-row gap-3">
                      <Text className="text-lg">👤</Text>
                      <Text className="flex-1 text-sm text-muted leading-relaxed">
                        <Text className="font-semibold text-foreground">Usuário:</Text> Clique em "Receber Suporte"
                      </Text>
                    </View>
                    <View className="flex-row gap-3">
                      <Text className="text-lg">✏️</Text>
                      <Text className="flex-1 text-sm text-muted leading-relaxed">
                        <Text className="font-semibold text-foreground">Anotações:</Text> Use ferramentas visuais
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </ScreenContainer>
        );
    }
  };

  return (
    <View className="flex-1 bg-background">
      {/* Header */}
      <View
        className="px-6 py-4 border-b"
        style={{ backgroundColor: colors.surface, borderColor: colors.border }}
      >
        <Text className="text-lg font-bold text-foreground">TechAssist Remote - Web Preview</Text>
        <Text className="text-xs text-muted mt-1">Visualização para Desktop/Notebook</Text>
      </View>

      {/* Mobile Simulator */}
      <View className="flex-1">
        <MobileSimulator title="Preview Mobile">{renderScreenContent()}</MobileSimulator>
      </View>

      {/* Footer Info */}
      <View
        className="px-6 py-4 border-t"
        style={{ backgroundColor: colors.surface, borderColor: colors.border }}
      >
        <Text className="text-xs text-muted text-center">
          Esta é uma visualização web do aplicativo. Para usar em um dispositivo real, escaneie o QR code com Expo Go.
        </Text>
      </View>
    </View>
  );
}
