import styles from './Piano.module.css';

const notes = ['c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b'];

function Piano() {

    return (
        <div class={styles.piano_container}>
            {notes.map(note => (
                <button
                    class={styles.piano_key}
                    onpointerdown={() => console.log(note)}
                >
                    {note}
                </button>
            ))}
        </div>
    )
}

export default Piano;
