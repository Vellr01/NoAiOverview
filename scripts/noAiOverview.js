const removeAiOverview = () => {
    const aiOverview = document.querySelector('#rcnt .bzXtMb.M8OgIe.dRpWwb');
    if (aiOverview !== null){
        aiOverview.innerHTML = '';
        return true;
    }
    return false;
};

async function shouldRemoveAiOverview(){
    const result = await browser.storage.local.get('shouldRemoveAiOverview');
    return result.shouldRemoveAiOverview ?? true;
}

async function main(){
    if (!await shouldRemoveAiOverview()){
        return;
    }

    const observer = new MutationObserver(() => {
        if (removeAiOverview()){
            observer.disconnect();
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    if (removeAiOverview()){
        observer.disconnect();
    }
}

main();