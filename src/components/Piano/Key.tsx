import { useAudio } from './AppAudioContext';
import styles from './Piano.module.css';

interface Props {
    note: string;
}

function Key({ note }: Props) {
    const { getAudio } = useAudio();
    let osc: OscillatorNode | undefined;

    const playNote = () => {
        const audio = getAudio();

        osc = audio.createOscillator();
        osc!.frequency.value = 440;
        osc!.connect(audio.destination);
        osc!.start();
    }

    const stopPlaying = () => {
        osc!.stop();
        osc!.disconnect();
        osc = undefined;
    }

    return (
        <button
            class={styles["piano-key"]}
            onpointerdown={playNote}
            onpointerup={stopPlaying}
        >
            {note}
        </button>

    )
}

export default Key;
