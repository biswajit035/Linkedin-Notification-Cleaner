async function deleteAllNotifications() {
  console.log("🔁 Starting deletion loop...");

  let deletedCount = 0;

  while (true) {
    const settingsButton = document.querySelector('button[aria-label="Settings menu"]');

    if (!settingsButton) {
      console.log("✅ No more Settings menu buttons found. Deletion complete.");
      break;
    }

    settingsButton.click();
    console.log(`⚙️ Clicked Settings menu #${deletedCount + 1}`);
    await new Promise(res => setTimeout(res, 100));

    const deleteButton = [...document.querySelectorAll('button.nt-card-settings-dropdown-item__button')]
      .find(btn => btn.innerText.trim().toLowerCase() === 'delete notification');

    if (deleteButton) {
      deleteButton.click();
      deletedCount++;
      console.log(`🗑️ Deleted notification #${deletedCount}`);
    } else {
      console.log("❌ Delete button not found.");
    }

    await new Promise(res => setTimeout(res, 100));
  }

  console.log(`🏁 Finished. Total notifications deleted: ${deletedCount}`);
}

deleteAllNotifications();