import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { ScreenContainer } from "@/components/screen-container";
import { useColors } from "@/hooks/use-colors";

/**
 * Index Screen - Página de Boas-vindas
 *
 * Oferece opções para acessar o app mobile ou a visualização web.
 */
export default function IndexScreen() {
  const router = useRouter();
  const colors = useColors();

  const handleGoToApp = () => {
    router.push("/(tabs)");
  };

  const handleGoToWebPreview = () => {
    router.push("/web-preview");
  };

  return (
    <ScreenContainer className="p-6">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <View className="flex-1 gap-8 justify-center">
          {/* Hero Section */}
          <View className="items-center gap-4">
            {/* Logo */}
            <View
              className="w-24 h-24 rounded-full items-center justify-center"
              style={{ backgroundColor: colors.primary }}
            >
              <Text className="text-5xl">📞</Text>
            </View>

            {/* Title */}
            <Text className="text-4xl font-bold text-foreground text-center">
              TechAssist Remote
            </Text>

            {/* Subtitle */}
            <Text className="text-base text-muted text-center leading-relaxed">
              Suporte técnico remoto com ferramentas visuais para guiar usuários
            </Text>
          </View>

          {/* Options */}
          <View className="gap-4">
            {/* Mobile App Button */}
            <TouchableOpacity
              onPress={handleGoToApp}
              className="py-5 rounded-lg items-center justify-center"
              style={{ backgroundColor: colors.primary }}
            >
              <Text className="text-lg font-semibold text-background">📱 Acessar App Mobile</Text>
            </TouchableOpacity>

            {/* Web Preview Button */}
            <TouchableOpacity
              onPress={handleGoToWebPreview}
              className="py-5 rounded-lg items-center justify-center border"
              style={{ borderColor: colors.primary, borderWidth: 2 }}
            >
              <Text className="text-lg font-semibold text-primary">💻 Visualização Web</Text>
            </TouchableOpacity>
          </View>

          {/* Info Cards */}
          <View className="gap-3">
            {/* Mobile Card */}
            <View className="bg-surface rounded-xl p-4 border" style={{ borderColor: colors.border }}>
              <Text className="text-sm font-semibold text-foreground mb-2">📱 App Mobile</Text>
              <Text className="text-xs text-muted leading-relaxed">
                Experiência completa do aplicativo otimizada para smartphones e tablets. Use em um dispositivo real ou escaneie o QR code com Expo Go.
              </Text>
            </View>

            {/* Web Preview Card */}
            <View className="bg-surface rounded-xl p-4 border" style={{ borderColor: colors.border }}>
              <Text className="text-sm font-semibold text-foreground mb-2">💻 Visualização Web</Text>
              <Text className="text-xs text-muted leading-relaxed">
                Visualize o aplicativo no seu navegador do notebook/desktop. Inclui simulador mobile para teste completo da interface.
              </Text>
            </View>
          </View>

          {/* Features */}
          <View className="gap-3 bg-surface rounded-xl p-4 border" style={{ borderColor: colors.border }}>
            <Text className="text-sm font-semibold text-foreground">✨ Funcionalidades</Text>
            <View className="gap-2">
              <Text className="text-xs text-muted">✓ Videoconferência via Jitsi Meet</Text>
              <Text className="text-xs text-muted">✓ Ferramentas de anotação em tela</Text>
              <Text className="text-xs text-muted">✓ Navegação fluida entre telas</Text>
              <Text className="text-xs text-muted">✓ Design responsivo e moderno</Text>
              <Text className="text-xs text-muted">✓ Tema claro/escuro automático</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
