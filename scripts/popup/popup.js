const toggleNoAiOverview = document.getElementById('toggleNoAiOverview');

async function load(){
    const result = await browser.storage.local.get('shouldRemoveAiOverview');
    toggleNoAiOverview.checked = result.shouldRemoveAiOverview ?? true;
}

toggleNoAiOverview.addEventListener('change', async () => {
    await browser.storage.local.set({ shouldRemoveAiOverview: toggleNoAiOverview.checked });
});

load();