import cron from 'node-cron';
import { readNotes, writeNotes } from '../../../database/notesHelper';

// Helper function to purge notes older than 30 days in the bin
async function purgeDeletedNotes() {
    const notes = await readNotes();
    const now = new Date();
    const updatedNotes = notes.filter(note => {
        if (note.isDeleted && note.deletedAt) {
            // Convert the deletedAt string to a Date object
            const deletedDate = new Date(note.deletedAt);
            // Calculate difference in days
            const diffDays = (now - deletedDate) / (1000 * 60 * 60 * 24);
            // Keep the note only if it hasn't been in the bin for 30+ days
            return diffDays < 30;
        }
        // If not deleted, keep the note
        return true;
    });

    // If some notes were removed, write the updated array back
    if (updatedNotes.length !== notes.length) {
        await writeNotes(updatedNotes);
        console.log('Cron job: Purged notes older than 30 days from the bin.');
    }
}

// Schedule the cron job to run daily at midnight (server time)
cron.schedule('0 0 * * *', () => {
    console.log('Cron job started: Purging old deleted notes...');
    purgeDeletedNotes();
});
