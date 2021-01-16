import * as actionTypes from "./actionTypes"
import * as Assets from "../Assets"

const initialState: PlayerState = {
    currentFileUrl: '',
    title: '',
    albumArtUrl: Assets.ICON_BLANK_ALBUM,
    playing: true,
    bgColors: [
        [70, 70, 70],
        [100, 100, 100]
    ]
}

function isLoadAction(action: PlayerAction): action is LoadAction {
    return (action as LoadAction).type === actionTypes.LOAD_FILE
}
function isUpdateBgColorsAction(action: PlayerAction): action is UpdateBgColorsAction {
    return (action as UpdateBgColorsAction).type === actionTypes.UPDATE_BGCOLORS
}
function isTogglePlaybackAction(action: PlayerAction): action is TogglePlaybackAction {
    return (action as TogglePlaybackAction).type === actionTypes.TOGGLE_PLAYBACK
}

const reducer = (
    state: PlayerState = initialState,
    action: PlayerAction
): PlayerState => {
    if (isLoadAction(action)) {
        return {
            ...state,
            currentFileUrl: action.fileUrl,
            title: action.title,
            albumArtUrl: action.albumArtUrl,
        }
    }
    if (isUpdateBgColorsAction(action)) {
        return {
            ...state,
            bgColors: action.colors.length === 0 ? initialState.bgColors : action.colors
        }
    }
    if (isTogglePlaybackAction(action)) {
        return {
            ...state,
            playing: !state.playing
        }
    }

    return state;
}

export default reducer