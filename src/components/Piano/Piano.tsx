import { AppAudioProvider } from './AppAudioContext';
import { Key } from './Key';
import styles from './Piano.module.css';
import { GeneratePitchRange, Pitch } from './Pitches';

function Piano() {
    const pitches = GeneratePitchRange(new Pitch("c", 4), new Pitch("c", 5));

    return (
        <AppAudioProvider>
            <div class={styles["piano-container"]}>
                {pitches.map(pitch => (
                    <Key pitch={pitch} />
                ))}
            </div>
        </AppAudioProvider>
    )
}

export default Piano;
