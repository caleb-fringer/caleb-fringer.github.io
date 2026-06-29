import { createContext, useContext, type ParentProps } from "solid-js";

interface AppAudioContextValue {
    getAudio: () => globalThis.AudioContext;
}

export const AppAudioContext = createContext<AppAudioContextValue>();

export function AppAudioProvider(props: ParentProps) {
    let audio: globalThis.AudioContext | undefined;

    const getAudio = () => {
        if (!audio) {
            audio = new AudioContext();
        }
        return audio;
    }

    return (
        <AppAudioContext.Provider value={{ getAudio }}>
            {props.children}
        </AppAudioContext.Provider>
    );
}

export function useAudio() {
    const audio = useContext(AppAudioContext);
    if (!audio) {
        throw new Error("useAudio must be used inside AppAudioProvider");
    }
    return audio;
}
