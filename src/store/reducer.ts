import * as actionTypes from "./actionTypes"
import * as Assets from '../Assets'

const initialState: PlayerState = {
    currentFile: new File([], ""),
    title: '',
    albumArt: Assets.ICON_BLANK_ALBUM,
    playing: true,
    progress: 0.0,
    duration: 0.0
}

function isLoadAction(action: PlayerAction): action is LoadAction {
    return (action as LoadAction).type === actionTypes.LOAD_FILE
}
function isUpdateProgressAction(action: PlayerAction): action is UpdateProgressAction {
    return (action as UpdateProgressAction).type === actionTypes.UPDATE_PROGRESS
}
function isUpdateDurationAction(action: PlayerAction): action is UpdateDurationAction {
    return (action as UpdateDurationAction).type === actionTypes.UPDATE_DURATION
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
            currentFile: action.file,
            title: action.title,
            albumArt: action.albumArt,
            playing: state.playing,
            progress: 0.0,
            duration: 0.0
        }
    }
    if (isUpdateProgressAction(action)) {
        return Object.assign({}, state, {
            progress: action.progress
        })
    }
    if (isUpdateDurationAction(action)) {
        return Object.assign({}, state, {
            duration: action.duration
        })
    }
    if (isTogglePlaybackAction(action)) {
        return Object.assign({}, state, {
            playing: !state.playing
        })
    }

    return state;
}

export default reducer