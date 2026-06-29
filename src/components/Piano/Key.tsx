import { useAudio } from './AppAudioContext';
import styles from './Piano.module.css';
import type { Pitch } from './Pitches';

export interface Props {
    pitch: Pitch;
}

export function Key({ pitch }: Props) {
    const { getAudio } = useAudio();
    let osc: OscillatorNode | null;

    const playNote = () => {
        const audio = getAudio();

        osc = new OscillatorNode(audio, {
            frequency: pitch.frequency
        });
        osc.connect(audio.destination);
        osc.start();
    }

    const stopPlaying = () => {
        osc!.stop();
        osc!.disconnect();
        osc = null;
    }

    return (
        <button
            class={styles["piano-key"]}
            onpointerdown={playNote}
            onpointerup={stopPlaying}
        >
            {pitch.note}
        </button>

    )
}
