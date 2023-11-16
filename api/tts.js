require("dotenv").config();

const gen_audio = ({ text, lang }) => {
  // [START texttospeech_v1_generated_TextToSpeech_SynthesizeSpeech_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The Synthesizer requires either plain text or SSML as input.
   */
  const input = { text };

  /**
   *  Required. The desired voice of the synthesized audio.
   */
  let voice = { languageCode: "en-US", ssmlGender: "NEUTRAL" };
  if (lang == "tamil") {
    voice = {
      languageCode: "ta-IN",
      voiceName: "ta-IN-Wavenet-C",
      ssmlGender: "FEMALE",
    };
  }
  if (lang == "telugu") {
    voice = {
      languageCode: "te-IN",
      voiceName: "te-IN-Standard-A",
      ssmlGender: "FEMALE",
    };
  }
  if (lang == "kannada") {
    voice = {
      languageCode: "kn-IN",
      voiceName: "kn-IN-Standard-A",
      ssmlGender: "FEMALE",
    };
  }
  if (lang == "marathi") {
    voice = {
      languageCode: "mr-IN",
      voiceName: "mr-IN-Standard-A",
      ssmlGender: "FEMALE",
    };
  }
  if (lang == "punjabi") {
    voice = {
      languageCode: "pa-IN",
      voiceName: "pa-IN-Standard-A",
      ssmlGender: "FEMALE",
    };
  }
  if (lang == "hindi") {
    voice = {
      languageCode: "hi-IN",
      voiceName: "hi-IN-Neural2-A",
      ssmlGender: "FEMALE",
    };
  }
  if (lang == "female") {
    voice = {
      languageCode: "en-IN",
      voiceName: "en-IN-Neural2-D",
      ssmlGender: "FEMALE",
    };
    console.log(voice);
  }
  /**
   *  Required. The configuration of the synthesized audio.
   */
  const audioConfig = { audioEncoding: "MP3" };

  // Imports the Texttospeech library
  const { TextToSpeechClient } = require("@google-cloud/text-to-speech").v1;

  // Instantiates a client
  const texttospeechClient = new TextToSpeechClient({
    keyFilename: process.env.GAC,
  });

  async function callSynthesizeSpeech() {
    // Construct request
    const request = {
      input,
      voice,
      audioConfig,
    };

    // Run request
    const response = await texttospeechClient.synthesizeSpeech(request);
    //console.log(response);
    return response;
  }

  return callSynthesizeSpeech();
  // [END texttospeech_v1_generated_TextToSpeech_SynthesizeSpeech_async]

  process.on("unhandledRejection", (err) => {
    console.error(err.message);
    process.exitCode = 1;
  });
};

module.exports = {
  gen_audio,
};
