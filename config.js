export default {
    app: {
        token: "cc106ebc7fda44ac9a426f42432f2eb9", // <- enter your token here
        muted: false, // <- mute microphone by default
        googleIt: true // <- ask users to google their request, in case of input.unknown action
    },
    locale: {
        strings: {
            welcomeTitle: "Hello, how can I help you",
            welcomeDescription: `You can type "Hello" for example. `,
            offlineTitle: "Oh, no!",
            offlineDescription: "It looks like you are not connected to the internet, this webpage requires internet connection, to process your requests",
            queryTitle: "Ask me something...",
            voiceTitle: "Go ahead, im listening..."
        },
        settings: {
            speechLang: "en-GB", // <- output language
            recognitionLang: "en-US" // <- input(recognition) language
        }
    }
}