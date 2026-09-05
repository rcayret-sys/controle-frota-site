/* Controle de Frota - dados públicos de versão
 * A chave abaixo é a publishable key do Supabase, própria para uso em clientes públicos.
 * Nunca coloque SUPABASE_SERVICE_ROLE_KEY neste arquivo.
 */
window.ControleFrotaReleaseService = (() => {
  const SUPABASE_URL = 'https://fxmqtqqdciteroicmjyc.supabase.co';
  const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_Zix3jef0TY9Uazf0xkOc3w_R1XJteCp';
  const LATEST_APK_URL = 'https://github.com/rcayret-sys/controle-frota-site/releases/latest/download/ControleFrota-latest.apk';

  async function load() {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/rpc/get_public_app_release_settings`,
      {
        method: 'POST',
        headers: {
          apikey: SUPABASE_PUBLISHABLE_KEY,
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: '{}',
        cache: 'no-store'
      }
    );

    if (!response.ok) {
      const detail = await response.text().catch(() => '');
      throw new Error(`Falha ao consultar versão (${response.status})${detail ? `: ${detail}` : ''}`);
    }

    const data = await response.json();
    const row = Array.isArray(data) ? data[0] : data;
    if (!row) throw new Error('Configuração de versão não encontrada.');
    return row;
  }

  return {
    load,
    latestApkUrl: LATEST_APK_URL
  };
})();
