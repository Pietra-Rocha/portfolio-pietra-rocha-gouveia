import { ScrollView, Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ScreenContainer } from "@/components/screen-container";
import { useColors } from "@/hooks/use-colors";
import { cn } from "@/lib/utils";

/**
 * Room Access Screen - Tela de Acesso à Sala
 *
 * Permite que o técnico crie uma nova sala de suporte
 * ou entre em uma sala existente.
 */
export default function RoomAccessScreen() {
  const router = useRouter();
  const colors = useColors();
  const [roomName, setRoomName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateRoom = () => {
    if (!roomName.trim()) {
      Alert.alert("Erro", "Por favor, insira um nome para a sala");
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

  const handleGenerateRoomName = () => {
    const randomId = Math.random().toString(36).substring(2, 8).toUpperCase();
    setRoomName(`Suporte-${randomId}`);
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <ScreenContainer className="p-6">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <View className="flex-1 gap-8 justify-center">
          {/* Header */}
          <View className="items-center gap-2">
            <Text className="text-3xl font-bold text-foreground">Criar Sala de Suporte</Text>
            <Text className="text-base text-muted text-center">
              Defina um nome único para a sala e compartilhe com o usuário
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
              <Text className="text-xs text-muted">
                Use caracteres alfanuméricos e hífens. Máximo 30 caracteres.
              </Text>
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
              onPress={handleBack}
              disabled={isLoading}
              className="py-3 rounded-lg items-center justify-center border"
              style={{ borderColor: colors.border }}
            >
              <Text className="text-base font-semibold text-foreground">← Voltar</Text>
            </TouchableOpacity>
          </View>

          {/* Info Section */}
          <View className="gap-4 bg-surface rounded-2xl p-6 border" style={{ borderColor: colors.border }}>
            <Text className="text-sm font-semibold text-foreground">📋 Dicas Importantes</Text>
            <View className="gap-2">
              <Text className="text-xs text-muted leading-relaxed">
                • Use nomes descritivos para identificar a sessão facilmente
              </Text>
              <Text className="text-xs text-muted leading-relaxed">
                • Compartilhe o nome exato da sala com o usuário
              </Text>
              <Text className="text-xs text-muted leading-relaxed">
                • Cada sala é única e pode ser acessada por múltiplos usuários
              </Text>
              <Text className="text-xs text-muted leading-relaxed">
                • Use as ferramentas de anotação para guiar o usuário visualmente
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
