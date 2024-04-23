// for displaying provided messages


export const MEDIA_MESSAGE_TYPES = {
    CAPTION: "caption",
    TRACKED_INFO: "tracked_info",
    GREETING: "greeting",
    ALERT: "alert",
    ERROR: 'error',
    SUCCESS: 'success',
    FAREWELL: 'farewell',
};

// handle success/ failure, Tracked info, and alert/ errors

export default function selectMessageDisplayerComponent(providedMessage) {
    switch (providedMessage.type) {
        case MEDIA_MESSAGE_TYPES.CAPTION:
            return { caption: providedMessage.text }
        default:
            return null;
    }
};