import fs from 'fs/promises';
import path from 'path';
import lockfile from 'proper-lockfile';

const dataPath = path.join(process.cwd(), 'database', 'notes.json');

export async function readNotes() {
    const data = await fs.readFile(dataPath, 'utf-8');
    return JSON.parse(data);
}

export async function writeNotes(notes) {
    // Acquire a lock on the file
    const release = await lockfile.lock(dataPath);
    try {
        await fs.writeFile(dataPath, JSON.stringify(notes, null, 2));
    } finally {
        await release();
    }
}
