import { AppAudioProvider } from './AppAudioContext';
import Key from './Key';
import styles from './Piano.module.css';

const notes = ['c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b'];

function Piano() {

    return (
        <AppAudioProvider>
            <div class={styles.piano_container}>
                {notes.map(note => (
                    <Key note={note} />
                ))}
            </div>
        </AppAudioProvider>
    )
}

export default Piano;
