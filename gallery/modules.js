var db = {
  "plugins": [
    {
      "slug": "Core",
      "website": "",
      "manual": "",
      "models": [
        {
          "slug": "AudioInterface",
          "author": "Core",
          "name": "Audio Out",
          "tags": [
            "External"
          ],
          "size": 8.0
        },
        {
          "slug": "MIDIToCVInterface",
          "author": "Core",
          "name": "MIDI-1",
          "tags": [
            "MIDI",
            "External"
          ],
          "size": 8.0
        },
        {
          "slug": "QuadMIDIToCVInterface",
          "author": "Core",
          "name": "MIDI-4",
          "tags": [
            "MIDI",
            "External",
            "Quad"
          ],
          "size": 10.000001
        },
        {
          "slug": "MIDICCToCVInterface",
          "author": "Core",
          "name": "MIDI-CC",
          "tags": [
            "MIDI",
            "External"
          ],
          "size": 10.000001
        },
        {
          "slug": "MIDITriggerToCVInterface",
          "author": "Core",
          "name": "MIDI-Trig",
          "tags": [
            "MIDI",
            "External"
          ],
          "size": 10.000001
        },
        {
          "slug": "Blank",
          "author": "Core",
          "name": "Blank",
          "tags": [
            "Blank"
          ],
          "size": 10.000001
        },
        {
          "slug": "Notes",
          "author": "Core",
          "name": "Notes",
          "tags": [
            "Blank"
          ],
          "size": 16.0
        }
      ]
    },
    {
      "slug": "AS",
      "website": "",
      "manual": "",
      "models": [
        {
          "slug": "SineOSC",
          "author": "AS",
          "name": "TinySine",
          "tags": [
            "Oscillator/VCO"
          ],
          "size": 4.0
        },
        {
          "slug": "SawOSC",
          "author": "AS",
          "name": "TinySawish",
          "tags": [
            "Oscillator/VCO"
          ],
          "size": 4.0
        },
        {
          "slug": "ADSR",
          "author": "AS",
          "name": "ADSR",
          "tags": [
            "Envelope Generator"
          ],
          "size": 8.0
        },
        {
          "slug": "VCA",
          "author": "AS",
          "name": "VCA",
          "tags": [
            "Amplifier/VCA"
          ],
          "size": 6.00000048
        },
        {
          "slug": "QuadVCA",
          "author": "AS",
          "name": "Quad VCA/Mixer",
          "tags": [
            "Amplifier/VCA",
            "Mixer"
          ],
          "size": 8.0
        },
        {
          "slug": "TriLFO",
          "author": "AS",
          "name": "Tri LFO",
          "tags": [
            "LFO"
          ],
          "size": 10.000001
        },
        {
          "slug": "AtNuVrTr",
          "author": "AS",
          "name": "AtNuVrTr Attenuverter",
          "tags": [
            "Attenuator",
            "Dual/Stereo"
          ],
          "size": 5.00000048
        },
        {
          "slug": "BPMClock",
          "author": "AS",
          "name": "BPM Clock",
          "tags": [
            "Clock"
          ],
          "size": 6.00000048
        },
        {
          "slug": "SEQ16",
          "author": "AS",
          "name": "16-Step Sequencer",
          "tags": [
            "Sequencer"
          ],
          "size": 44.0000038
        },
        {
          "slug": "Mixer8ch",
          "author": "AS",
          "name": "8-CH Mixer",
          "tags": [
            "Mixer",
            "Amplifier/VCA"
          ],
          "size": 26.0000019
        },
        {
          "slug": "MonoVUmeter",
          "author": "AS",
          "name": "Mono VU meter",
          "tags": [
            "Visual",
            "Utility"
          ],
          "size": 2.0
        },
        {
          "slug": "StereoVUmeter",
          "author": "AS",
          "name": "Stereo VU meter",
          "tags": [
            "Visual",
            "Utility"
          ],
          "size": 4.0
        },
        {
          "slug": "Steps",
          "author": "AS",
          "name": "Steps",
          "tags": [
            "Switch",
            "Sequencer",
            "Utility"
          ],
          "size": 6.00000048
        },
        {
          "slug": "LaunchGate",
          "author": "AS",
          "name": "Launch Gate",
          "tags": [
            "Switch",
            "Sequencer",
            "Utility",
            "Delay"
          ],
          "size": 6.00000048
        },
        {
          "slug": "KillGate",
          "author": "AS",
          "name": "Kill Gate",
          "tags": [
            "Switch",
            "Sequencer",
            "Utility",
            "Delay"
          ],
          "size": 6.00000048
        },
        {
          "slug": "Flow",
          "author": "AS",
          "name": "Flow",
          "tags": [
            "Switch",
            "Utility"
          ],
          "size": 6.00000048
        },
        {
          "slug": "SignalDelay",
          "author": "AS",
          "name": "Signal Delay",
          "tags": [
            "Utility",
            "Delay"
          ],
          "size": 6.00000048
        },
        {
          "slug": "Multiple2_5",
          "author": "AS",
          "name": "Multiple 2 x 5",
          "tags": [
            "Multiple",
            "Utility"
          ],
          "size": 5.00000048
        },
        {
          "slug": "Merge2_5",
          "author": "AS",
          "name": "Merge 2 x 5",
          "tags": [
            "Multiple",
            "Utility"
          ],
          "size": 5.00000048
        },
        {
          "slug": "TriggersMKI",
          "author": "AS",
          "name": "Triggers MKI",
          "tags": [
            "Switch",
            "Utility"
          ],
          "size": 6.00000048
        },
        {
          "slug": "TriggersMKII",
          "author": "AS",
          "name": "Triggers MKII",
          "tags": [
            "Switch",
            "Utility"
          ],
          "size": 6.00000048
        },
        {
          "slug": "BPMCalc",
          "author": "AS",
          "name": "BPM to Delay/Hz Calculator",
          "tags": [
            "Utility"
          ],
          "size": 14.000001
        },
        {
          "slug": "DelayPlusFx",
          "author": "AS",
          "name": "DelayPlus Fx",
          "tags": [
            "Delay",
            "Effect"
          ],
          "size": 8.0
        },
        {
          "slug": "DelayPlusStereoFx",
          "author": "AS",
          "name": "DelayPlus Stereo Fx",
          "tags": [
            "Dual/Stereo",
            "Delay",
            "Effect"
          ],
          "size": 12.000001
        },
        {
          "slug": "PhaserFx",
          "author": "AS",
          "name": "Phaser FX",
          "tags": [
            "Effect"
          ],
          "size": 6.00000048
        },
        {
          "slug": "ReverbFx",
          "author": "AS",
          "name": "Reverb FX",
          "tags": [
            "Reverb",
            "Effect"
          ],
          "size": 6.00000048
        },
        {
          "slug": "SuperDriveFx",
          "author": "AS",
          "name": "Super Drive FX",
          "tags": [
            "Amplifier/VCA",
            "Effect"
          ],
          "size": 6.00000048
        },
        {
          "slug": "TremoloFx",
          "author": "AS",
          "name": "Tremolo FX",
          "tags": [
            "Effect"
          ],
          "size": 6.00000048
        },
        {
          "slug": "WaveShaper",
          "author": "AS",
          "name": "Wave Shaper",
          "tags": [
            "Waveshaper"
          ],
          "size": 6.00000048
        },
        {
          "slug": "BlankPanel4",
          "author": "AS",
          "name": "BlankPanel 4",
          "tags": [
            "Blank"
          ],
          "size": 4.0
        },
        {
          "slug": "BlankPanel6",
          "author": "AS",
          "name": "BlankPanel 6",
          "tags": [
            "Blank"
          ],
          "size": 6.00000048
        },
        {
          "slug": "BlankPanel8",
          "author": "AS",
          "name": "BlankPanel 8",
          "tags": [
            "Blank"
          ],
          "size": 8.0
        },
        {
          "slug": "BlankPanelSpecial",
          "author": "AS",
          "name": "Blank Panel Special",
          "tags": [],
          "size": 8.0
        }
      ]
    },
    {
      "slug": "Aaron-MicroTools",
      "website": "",
      "manual": "",
      "models": [
        {
          "slug": "Push Button",
          "author": "MicroTools",
          "name": "Push Button",
          "tags": [
            "Utility"
          ],
          "size": 8.0
        },
        {
          "slug": "Recorder",
          "author": "MicroTools",
          "name": "Recorder",
          "tags": [
            "Recording"
          ],
          "size": 3.00000024
        }
      ]
    },
    {
      "slug": "Alikins",
      "website": "https://github.com/alikins/Alikins-rack-plugins",
      "manual": "https://github.com/alikins/Alikins-rack-plugins/blob/master/README.md",
      "models": [
        {
          "slug": "IdleSwitch",
          "author": "Alikins",
          "name": "Idle Switch",
          "tags": [
            "Switch",
            "Utility"
          ],
          "size": 8.0
        },
        {
          "slug": "MomentaryOnButtons",
          "author": "Alikins",
          "name": "Momentary On Buttons",
          "tags": [
            "Utility"
          ],
          "size": 4.0
        },
        {
          "slug": "BigMuteButton",
          "author": "Alikins",
          "name": "Big Mute Button",
          "tags": [
            "Utility"
          ],
          "size": 6.00000048
        },
        {
          "slug": "ColorPanel",
          "author": "Alikins",
          "name": "Color Panel",
          "tags": [
            "Visual"
          ],
          "size": 6.00000048
        },
        {
          "slug": "GateLength",
          "author": "Alikins",
          "name": "Gate Length",
          "tags": [
            "Utility"
          ],
          "size": 10.000001
        },
        {
          "slug": "SpecificValue",
          "author": "Alikins",
          "name": "Specific Values",
          "tags": [
            "Utility"
          ],
          "size": 6.00000048
        },
        {
          "slug": "Reference",
          "author": "Alikins",
          "name": "Reference Voltages",
          "tags": [
            "Utility"
          ],
          "size": 2.0
        }
      ]
    },
    {
      "slug": "AmalgamatedHarmonics",
      "website": "https://github.com/jhoar/AmalgamatedHarmonics/wiki",
      "manual": "https://github.com/jhoar/AmalgamatedHarmonics/wiki",
      "models": [
        {
          "slug": "Arpeggiator",
          "author": "Amalgamated Harmonics",
          "name": "Arpeggiator (deprecated)",
          "tags": [
            "Arpeggiator"
          ],
          "size": 16.0
        },
        {
          "slug": "Arpeggiator2",
          "author": "Amalgamated Harmonics",
          "name": "Arpeggiator MkII",
          "tags": [
            "Arpeggiator"
          ],
          "size": 16.0
        },
        {
          "slug": "Circle",
          "author": "Amalgamated Harmonics",
          "name": "Fifths and Fourths",
          "tags": [
            "Sequencer"
          ],
          "size": 16.0
        },
        {
          "slug": "Imperfect",
          "author": "Amalgamated Harmonics",
          "name": "Imperfect (deprecated)",
          "tags": [
            "Utility"
          ],
          "size": 21.0000019
        },
        {
          "slug": "Imperfect2",
          "author": "Amalgamated Harmonics",
          "name": "Imperfect MkII",
          "tags": [
            "Utility"
          ],
          "size": 30.0000019
        },
        {
          "slug": "Progress",
          "author": "Amalgamated Harmonics",
          "name": "Progress",
          "tags": [
            "Sequencer"
          ],
          "size": 26.0000019
        },
        {
          "slug": "Ruckus",
          "author": "Amalgamated Harmonics",
          "name": "Ruckus",
          "tags": [
            "Sequencer"
          ],
          "size": 26.0000019
        },
        {
          "slug": "ScaleQuantizer",
          "author": "Amalgamated Harmonics",
          "name": "Scale Quantizer (deprecated)",
          "tags": [
            "Quantizer"
          ],
          "size": 16.0
        },
        {
          "slug": "ScaleQuantizer2",
          "author": "Amalgamated Harmonics",
          "name": "Scale Quantizer MkII",
          "tags": [
            "Quantizer"
          ],
          "size": 20.0000019
        },
        {
          "slug": "SLN",
          "author": "Amalgamated Harmonics",
          "name": "SLN",
          "tags": [
            "Noise"
          ],
          "size": 3.00000024
        }
      ]
    },
    {
      "slug": "ArableInstruments",
      "website": "",
      "manual": "",
      "models": [
        {
          "slug": "Joni",
          "author": "Arable Instruments",
          "name": "Joni - Texture Synthesizer",
          "tags": [
            "Granular",
            "Reverb"
          ],
          "size": 31.0000019
        }
      ]
    },
    {
      "slug": "AudibleInstruments",
      "website": "",
      "manual": "",
      "models": [
        {
          "slug": "Braids",
          "author": "Audible Instruments",
          "name": "Macro Oscillator",
          "tags": [
            "Oscillator/VCO",
            "Waveshaper"
          ],
          "size": 16.0
        },
        {
          "slug": "Elements",
          "author": "Audible Instruments",
          "name": "Modal Synthesizer",
          "tags": [
            "Physical Modeling"
          ],
          "size": 34.0
        },
        {
          "slug": "Tides",
          "author": "Audible Instruments",
          "name": "Tidal Modulator",
          "tags": [
            "LFO",
            "Oscillator/VCO",
            "Waveshaper",
            "Function Generator"
          ],
          "size": 14.000001
        },
        {
          "slug": "Clouds",
          "author": "Audible Instruments",
          "name": "Texture Synthesizer",
          "tags": [
            "Granular",
            "Reverb"
          ],
          "size": 18.0
        },
        {
          "slug": "Warps",
          "author": "Audible Instruments",
          "name": "Meta Modulator",
          "tags": [
            "Ring Modulator",
            "Waveshaper"
          ],
          "size": 10.000001
        },
        {
          "slug": "Rings",
          "author": "Audible Instruments",
          "name": "Resonator",
          "tags": [
            "Physical Modeling"
          ],
          "size": 14.000001
        },
        {
          "slug": "Links",
          "author": "Audible Instruments",
          "name": "Multiples",
          "tags": [
            "Multiple",
            "Mixer"
          ],
          "size": 4.0
        },
        {
          "slug": "Kinks",
          "author": "Audible Instruments",
          "name": "Utilities",
          "tags": [
            "Utility",
            "Noise"
          ],
          "size": 4.0
        },
        {
          "slug": "Shades",
          "author": "Audible Instruments",
          "name": "Mixer",
          "tags": [
            "Mixer"
          ],
          "size": 6.00000048
        },
        {
          "slug": "Branches",
          "author": "Audible Instruments",
          "name": "Bernoulli Gate",
          "tags": [
            "Random",
            "Dual/Stereo"
          ],
          "size": 6.00000048
        },
        {
          "slug": "Blinds",
          "author": "Audible Instruments",
          "name": "Quad VC-polarizer",
          "tags": [
            "Mixer",
            "Attenuator"
          ],
          "size": 12.000001
        },
        {
          "slug": "Veils",
          "author": "Audible Instruments",
          "name": "Quad VCA",
          "tags": [
            "Mixer"
          ],
          "size": 12.000001
        },
        {
          "slug": "Frames",
          "author": "Audible Instruments",
          "name": "Keyframer/Mixer",
          "tags": [
            "Mixer",
            "Attenuator",
            "LFO"
          ],
          "size": 18.0
        }
      ]
    },
    {
      "slug": "Autodafe",
      "website": "",
      "manual": "",
      "models": [
        {
          "slug": "Clock Divider",
          "author": "Autodafe",
          "name": "Clock Divider",
          "tags": [
            "Utility"
          ],
          "size": 10.000001
        },
        {
          "slug": "Phaser",
          "author": "Autodafe",
          "name": "Phaser",
          "tags": [
            "Effect"
          ],
          "size": 8.0
        }
      ]
    },
    {
      "slug": "Autodafe - Drum Kit",
      "website": "",
      "manual": "",
      "models": [
        {
          "slug": "Drums - Snare",
          "author": "Autodafe - Drum Kit",
          "name": "Drums - Snare",
          "tags": [
            "Oscillator/VCO"
          ],
          "size": 8.0
        },
        {
          "slug": "Drums - Kick",
          "author": "Autodafe - Drum Kit",
          "name": "Drums - Kick",
          "tags": [
            "Oscillator/VCO"
          ],
          "size": 8.0
        },
        {
          "slug": "Drums - Claps",
          "author": "Autodafe - Drum Kit",
          "name": "Drums - Claps",
          "tags": [
            "Oscillator/VCO"
          ],
          "size": 8.0
        },
        {
          "slug": "Drums - Cymbals",
          "author": "Autodafe - Drum Kit",
          "name": "Drums - Cymbals",
          "tags": [
            "Oscillator/VCO"
          ],
          "size": 8.0
        },
        {
          "slug": "Drums - Ride",
          "author": "Autodafe - Drum Kit",
          "name": "Drums - Ride",
          "tags": [
            "Oscillator/VCO"
          ],
          "size": 8.0
        },
        {
          "slug": "Drums - Rim/Claves",
          "author": "Autodafe - Drum Kit",
          "name": "Drums - Rim/Claves",
          "tags": [
            "Oscillator/VCO"
          ],
          "size": 8.0
        },
        {
          "slug": "Drums - Closed Hats",
          "author": "Autodafe - Drum Kit",
          "name": "Drums - Closed Hats",
          "tags": [
            "Oscillator/VCO"
          ],
          "size": 8.0
        },
        {
          "slug": "Drums - Open Hats",
          "author": "Autodafe - Drum Kit",
          "name": "Drums - Open Hats",
          "tags": [
            "Oscillator/VCO"
          ],
          "size": 8.0
        },
        {
          "slug": "Drums - 8-Channel Mixer",
          "author": "Autodafe - Drum Kit",
          "name": "Drums - 8-Channel Mixer",
          "tags": [
            "Oscillator/VCO"
          ],
          "size": 53.0000038
        }
      ]
    },
    {
      "slug": "BOKONTEPByteBeatMachine",
      "website": "",
      "manual": "",
      "models": [
        {
          "slug": "BokontepByteBeatMachine",
          "author": "BokontepByteBeat",
          "name": "Bokontep ByteBeat Machine",
          "tags": [
            "Oscillator/VCO"
          ],
          "size": 18.0
        }
      ]
    },
    {
      "slug": "BaconMusic",
      "website": "https://github.com/baconpaul/Bacon Music",
      "manual": "",
      "models": [
        {
          "slug": "HarMoNee",
          "author": "Bacon Music",
          "name": "HarMoNee",
          "tags": [
            "Tuner"
          ],
          "size": 8.0
        },
        {
          "slug": "Glissinator",
          "author": "Bacon Music",
          "name": "Glissinator",
          "tags": [
            "Effect"
          ],
          "size": 5.00000048
        },
        {
          "slug": "PolyGnome",
          "author": "Bacon Music",
          "name": "PolyGnome",
          "tags": [
            "Clock"
          ],
          "size": 14.000001
        },
        {
          "slug": "QuantEyes",
          "author": "Bacon Music",
          "name": "QuantEyes",
          "tags": [
            "Quantizer"
          ],
          "size": 11.000001
        },
        {
          "slug": "SampleDelay",
          "author": "Bacon Music",
          "name": "SampleDelay",
          "tags": [
            "Delay"
          ],
          "size": 5.00000048
        },
        {
          "slug": "ChipNoise",
          "author": "Bacon Music",
          "name": "ChipNoise",
          "tags": [
            "Noise"
          ],
          "size": 6.00000048
        },
        {
          "slug": "ChipWaves",
          "author": "Bacon Music",
          "name": "ChipWaves",
          "tags": [
            "Oscillator/VCO"
          ],
          "size": 8.0
        },
        {
          "slug": "ChipYourWave",
          "author": "Bacon Music",
          "name": "ChipYourWave",
          "tags": [
            "Oscillator/VCO"
          ],
          "size": 23.0000019
        },
        {
          "slug": "KarplusStrongPoly",
          "author": "Bacon Music",
          "name": "KarplusStrongPoly",
          "tags": [
            "Oscillator/VCO"
          ],
          "size": 15.000001
        },
        {
          "slug": "ALingADing",
          "author": "Bacon Music",
          "name": "ALingADing",
          "tags": [
            "Ring Modulator"
          ],
          "size": 5.00000048
        },
        {
          "slug": "Bitulator",
          "author": "Bacon Music",
          "name": "Bitulator",
          "tags": [
            "Distortion"
          ],
          "size": 6.00000048
        }
      ]
    },
    {
      "slug": "Befaco",
      "website": "",
      "manual": "",
      "models": [
        {
          "slug": "EvenVCO",
          "author": "Befaco",
          "name": "EvenVCO",
          "tags": [
            "Oscillator/VCO"
          ],
          "size": 8.0
        },
        {
          "slug": "Rampage",
          "author": "Befaco",
          "name": "Rampage",
          "tags": [
            "Function Generator",
            "Logic",
            "Slew Limiter",
            "Envelope Follower",
            "Dual/Stereo"
          ],
          "size": 18.0
        },
        {
          "slug": "ABC",
          "author": "Befaco",
          "name": "A*B+C",
          "tags": [
            "Ring Modulator",
            "Attenuator",
            "Dual/Stereo"
          ],
          "size": 6.00000048
        },
        {
          "slug": "SpringReverb",
          "author": "Befaco",
          "name": "Spring Reverb",
          "tags": [
            "Reverb",
            "Dual/Stereo"
          ],
          "size": 8.0
        },
        {
          "slug": "Mixer",
          "author": "Befaco",
          "name": "Mixer",
          "tags": [
            "Mixer"
          ],
          "size": 5.00000048
        },
        {
          "slug": "SlewLimiter",
          "author": "Befaco",
          "name": "Slew Limiter",
          "tags": [
            "Slew Limiter",
            "Envelope Follower"
          ],
          "size": 6.00000048
        },
        {
          "slug": "DualAtenuverter",
          "author": "Befaco",
          "name": "Dual Atenuverter",
          "tags": [
            "Attenuator",
            "Dual/Stereo"
          ],
          "size": 5.00000048
        }
      ]
    },
    {
      "slug": "Bidoo",
      "website": "",
      "manual": "",
      "models": [
        {
          "slug": "dTrOY",
          "author": "Bidoo",
          "name": "dTrOY sequencer",
          "tags": [
            "Sequencer"
          ],
          "size": 34.0
        },
        {
          "slug": "bordL",
          "author": "Bidoo",
          "name": "bordL sequencer",
          "tags": [
            "Sequencer"
          ],
          "size": 34.0
        },
        {
          "slug": "µ",
          "author": "Bidoo",
          "name": "µ synced pulse generator",
          "tags": [
            "Sequencer"
          ],
          "size": 5.00000048
        },
        {
          "slug": "tOCAnTe",
          "author": "Bidoo",
          "name": "tOCAnTe clock",
          "tags": [
            "Clock"
          ],
          "size": 7.00000048
        },
        {
          "slug": "ChUTE",
          "author": "Bidoo",
          "name": "ChUTE trigger",
          "tags": [
            "Sequencer"
          ],
          "size": 9.0
        },
        {
          "slug": "lATe",
          "author": "Bidoo",
          "name": "lATe clock modulator",
          "tags": [
            "Clock Modulator"
          ],
          "size": 3.00000024
        },
        {
          "slug": "LoURdE",
          "author": "Bidoo",
          "name": "LoURdE gate",
          "tags": [
            "Logic"
          ],
          "size": 5.00000048
        },
        {
          "slug": "ACnE",
          "author": "Bidoo",
          "name": "ACnE mixer",
          "tags": [
            "Mixer"
          ],
          "size": 34.0
        },
        {
          "slug": "OUAIve",
          "author": "Bidoo",
          "name": "OUAIve player",
          "tags": [
            "Sampler"
          ],
          "size": 9.0
        },
        {
          "slug": "cANARd",
          "author": "Bidoo",
          "name": "cANARd sampler",
          "tags": [
            "Sampler"
          ],
          "size": 13.000001
        },
        {
          "slug": "dUKe",
          "author": "Bidoo",
          "name": "dUKe controller",
          "tags": [
            "Controller"
          ],
          "size": 12.000001
        },
        {
          "slug": "MOiRE",
          "author": "Bidoo",
          "name": "MOiRE controller",
          "tags": [
            "Controller"
          ],
          "size": 15.000001
        },
        {
          "slug": "ForK",
          "author": "Bidoo",
          "name": "ForK oscillator",
          "tags": [
            "Oscillator/VCO"
          ],
          "size": 6.00000048
        },
        {
          "slug": "TiARE",
          "author": "Bidoo",
          "name": "TiARE oscillator",
          "tags": [
            "Oscillator/VCO"
          ],
          "size": 10.000001
        },
        {
          "slug": "clACos",
          "author": "Bidoo",
          "name": "clACos oscillator",
          "tags": [
            "Oscillator/VCO"
          ],
          "size": 10.000001
        },
        {
          "slug": "antN",
          "author": "Bidoo",
          "name": "antN oscillator",
          "tags": [
            "Oscillator/VCO"
          ],
          "size": 9.0
        },
        {
          "slug": "lIMbO",
          "author": "Bidoo",
          "name": "lIMbO filter",
          "tags": [
            "Filter/VCF"
          ],
          "size": 8.0
        },
        {
          "slug": "pErCO",
          "author": "Bidoo",
          "name": "pErCO filter",
          "tags": [
            "Filter/VCF"
          ],
          "size": 8.0
        },
        {
          "slug": "baR",
          "author": "Bidoo",
          "name": "bAR compressor",
          "tags": [
            "Dynamics"
          ],
          "size": 9.0
        },
        {
          "slug": "ziNC",
          "author": "Bidoo",
          "name": "ziNC vocoder",
          "tags": [
            "Effect"
          ],
          "size": 13.000001
        },
        {
          "slug": "dFUZE",
          "author": "Bidoo",
          "name": "dFUZE reverberator",
          "tags": [
            "Reverb"
          ],
          "size": 7.00000048
        },
        {
          "slug": "vOId",
          "author": "Bidoo",
          "name": "vOId machine",
          "tags": [
            "Blank"
          ],
          "size": 12.000001
        },
        {
          "slug": "Σ",
          "author": "Bidoo",
          "name": "Σ multiprise :)",
          "tags": [
            "Multiple"
          ],
          "size": 5.00000048
        }
      ]
    },
    {
      "slug": "Bogaudio",
      "website": "https://github.com/bogaudio/BogaudioModules",
      "manual": "https://github.com/bogaudio/BogaudioModules/blob/master/README.md",
      "models": [
        {
          "slug": "Bogaudio-VCO",
          "author": "Bogaudio",
          "name": "VCO - oscillator - 10HP",
          "tags": [
            "Oscillator/VCO"
          ],
          "size": 10.000001
        },
        {
          "slug": "Bogaudio-XCO",
          "author": "Bogaudio",
          "name": "XCO - oscillator with wave mixer - 20HP",
          "tags": [
            "Oscillator/VCO"
          ],
          "size": 20.0000019
        },
        {
          "slug": "Bogaudio-Additator",
          "author": "Bogaudio",
          "name": "ADDITATOR - additive oscillator - 15HP",
          "tags": [
            "Oscillator/VCO"
          ],
          "size": 15.000001
        },
        {
          "slug": "Bogaudio-FMOp",
          "author": "Bogaudio",
          "name": "FM-OP - FM oscillator - 10HP",
          "tags": [
            "Oscillator/VCO",
            "Synth Voice"
          ],
          "size": 10.000001
        },
        {
          "slug": "Bogaudio-LFO",
          "author": "Bogaudio",
          "name": "LFO - low-frequency oscillator - 10HP",
          "tags": [
            "LFO"
          ],
          "size": 10.000001
        },
        {
          "slug": "Bogaudio-EightFO",
          "author": "Bogaudio",
          "name": "8FO - LFO with 8 phased outputs - 17HP",
          "tags": [
            "LFO"
          ],
          "size": 17.0
        },
        {
          "slug": "Bogaudio-DADSRH",
          "author": "Bogaudio",
          "name": "DADSR(H) - advanced envelope - 10HP",
          "tags": [
            "Envelope Generator"
          ],
          "size": 10.000001
        },
        {
          "slug": "Bogaudio-DADSRHPlus",
          "author": "Bogaudio",
          "name": "DADSR(H)+ - advanced envelope - 15HP",
          "tags": [
            "Envelope Generator"
          ],
          "size": 15.000001
        },
        {
          "slug": "Bogaudio-DGate",
          "author": "Bogaudio",
          "name": "DGATE - trigger-to-gate with delay - 3HP",
          "tags": [],
          "size": 3.00000024
        },
        {
          "slug": "Bogaudio-Shaper",
          "author": "Bogaudio",
          "name": "SHAPER - envelope and amplifier - 10HP",
          "tags": [
            "Envelope Generator",
            "Amplifier/VCA"
          ],
          "size": 10.000001
        },
        {
          "slug": "Bogaudio-ShaperPlus",
          "author": "Bogaudio",
          "name": "SHAPER+ - envelope and amplifier - 15HP",
          "tags": [
            "Envelope Generator",
            "Amplifier/VCA"
          ],
          "size": 15.000001
        },
        {
          "slug": "Bogaudio-ADSR",
          "author": "Bogaudio",
          "name": "ADSR - utility envelope - 3HP",
          "tags": [
            "Envelope Generator"
          ],
          "size": 3.00000024
        },
        {
          "slug": "Bogaudio-Follow",
          "author": "Bogaudio",
          "name": "FOLLOW - envelope follower - 3HP",
          "tags": [
            "Envelope Follower"
          ],
          "size": 3.00000024
        },
        {
          "slug": "Bogaudio-Mix4",
          "author": "Bogaudio",
          "name": "MIX4 - 4-channel mixer and panner - 15HP",
          "tags": [
            "Mixer",
            "Panning"
          ],
          "size": 15.000001
        },
        {
          "slug": "Bogaudio-Mix8",
          "author": "Bogaudio",
          "name": "MIX8 - 8-channel mixer and panner - 27HP",
          "tags": [
            "Mixer",
            "Panning"
          ],
          "size": 27.0000019
        },
        {
          "slug": "Bogaudio-VCM",
          "author": "Bogaudio",
          "name": "VCM - 4-channel mixer - 10HP",
          "tags": [
            "Mixer"
          ],
          "size": 10.000001
        },
        {
          "slug": "Bogaudio-Pan",
          "author": "Bogaudio",
          "name": "PAN - dual panner - 3HP",
          "tags": [
            "Panning",
            "Dual/Stereo"
          ],
          "size": 3.00000024
        },
        {
          "slug": "Bogaudio-XFade",
          "author": "Bogaudio",
          "name": "XFADE - crossfader - 3HP",
          "tags": [
            "Mixer"
          ],
          "size": 3.00000024
        },
        {
          "slug": "Bogaudio-VCA",
          "author": "Bogaudio",
          "name": "VCA - dual attenuator - 3HP",
          "tags": [
            "Attenuator",
            "Dual/Stereo"
          ],
          "size": 3.00000024
        },
        {
          "slug": "Bogaudio-VCAmp",
          "author": "Bogaudio",
          "name": "VCAMP - amplifier - 3HP",
          "tags": [
            "Amplifier/VCA"
          ],
          "size": 3.00000024
        },
        {
          "slug": "Bogaudio-Analyzer",
          "author": "Bogaudio",
          "name": "ANALYZER - spectrum analyzer - 20HP",
          "tags": [
            "Visual"
          ],
          "size": 20.0000019
        },
        {
          "slug": "Bogaudio-VU",
          "author": "Bogaudio",
          "name": "VU - stereo signal meter - 3HP",
          "tags": [
            "Visual",
            "Dual/Stereo"
          ],
          "size": 3.00000024
        },
        {
          "slug": "Bogaudio-Detune",
          "author": "Bogaudio",
          "name": "DETUNE - pitch CV processor - 3HP",
          "tags": [
            "Tuner"
          ],
          "size": 3.00000024
        },
        {
          "slug": "Bogaudio-Stack",
          "author": "Bogaudio",
          "name": "STACK - pitch CV processor - 3HP",
          "tags": [
            "Tuner"
          ],
          "size": 3.00000024
        },
        {
          "slug": "Bogaudio-Reftone",
          "author": "Bogaudio",
          "name": "REFTONE - precision pitch CV generator - 3HP",
          "tags": [
            "Tuner"
          ],
          "size": 3.00000024
        },
        {
          "slug": "Bogaudio-Bool",
          "author": "Bogaudio",
          "name": "BOOL - boolean logic - 3HP",
          "tags": [
            "Logic"
          ],
          "size": 3.00000024
        },
        {
          "slug": "Bogaudio-CVD",
          "author": "Bogaudio",
          "name": "CVD - CV delay - 3HP",
          "tags": [
            "Delay"
          ],
          "size": 3.00000024
        },
        {
          "slug": "Bogaudio-FlipFlop",
          "author": "Bogaudio",
          "name": "FLIPFLOP - dual stateful logic - 3HP",
          "tags": [
            "Logic",
            "Dual/Stereo"
          ],
          "size": 3.00000024
        },
        {
          "slug": "Bogaudio-Manual",
          "author": "Bogaudio",
          "name": "MANUAL - manual gates/triggers - 3HP",
          "tags": [],
          "size": 3.00000024
        },
        {
          "slug": "Bogaudio-Mult",
          "author": "Bogaudio",
          "name": "MULT - multiple - 3HP",
          "tags": [
            "Multiple"
          ],
          "size": 3.00000024
        },
        {
          "slug": "Bogaudio-Noise",
          "author": "Bogaudio",
          "name": "NOISE - noise source - 3HP",
          "tags": [
            "Noise",
            "Random"
          ],
          "size": 3.00000024
        },
        {
          "slug": "Bogaudio-Offset",
          "author": "Bogaudio",
          "name": "OFFSET - CV offset and scaler - 3HP",
          "tags": [
            "Attenuator"
          ],
          "size": 3.00000024
        },
        {
          "slug": "Bogaudio-SampleHold",
          "author": "Bogaudio",
          "name": "S&H - dual sample and hold - 3HP",
          "tags": [
            "Sample and Hold",
            "Dual/Stereo"
          ],
          "size": 3.00000024
        },
        {
          "slug": "Bogaudio-Sums",
          "author": "Bogaudio",
          "name": "SUMS - arithmetic logic - 3HP",
          "tags": [
            "Logic"
          ],
          "size": 3.00000024
        },
        {
          "slug": "Bogaudio-Switch",
          "author": "Bogaudio",
          "name": "SWITCH - signal router - 3HP",
          "tags": [
            "Switch"
          ],
          "size": 3.00000024
        }
      ]
    },
    {
      "slug": "CastleRocktronics",
      "website": "",
      "manual": "",
      "models": [
        {
          "slug": "CR-V01_Cubefader",
          "author": "CastleRocktronics",
          "name": "Cubefader",
          "tags": [
            "Utility",
            "Mixer"
          ],
          "size": 12.000001
        }
      ]
    },
    {
      "slug": "CharredDesert",
      "website": "https://github.com/JerrySievert/CharredDesert",
      "manual": "https://github.com/JerrySievert/CharredDesert/blob/master/docs/README.md",
      "models": [
        {
          "slug": "DTMF",
          "author": "CharredDesert",
          "name": "DTMF",
          "tags": [
            "Envelope Generator"
          ],
          "size": 3.00000024
        },
        {
          "slug": "Noise",
          "author": "CharredDesert",
          "name": "Noise",
          "tags": [
            "Noise"
          ],
          "size": 3.00000024
        },
        {
          "slug": "CV Sequencer",
          "author": "CharredDesert",
          "name": "CV Sequencer",
          "tags": [
            "Logic",
            "Sequencer",
            "Logic"
          ],
          "size": 3.00000024
        },
        {
          "slug": "Not",
          "author": "CharredDesert",
          "name": "Not",
          "tags": [
            "Logic"
          ],
          "size": 3.00000024
        },
        {
          "slug": "Pan",
          "author": "CharredDesert",
          "name": "Pan",
          "tags": [
            "Panning"
          ],
          "size": 3.00000024
        },
        {
          "slug": "Shift",
          "author": "CharredDesert",
          "name": "Shift",
          "tags": [
            "Logic"
          ],
          "size": 3.00000024
        },
        {
          "slug": "Oscar",
          "author": "CharredDesert",
          "name": "Oscar",
          "tags": [
            "Oscillator/VCO",
            "Waveshaper"
          ],
          "size": 6.00000048
        },
        {
          "slug": "Oscar^2",
          "author": "CharredDesert",
          "name": "Oscar^2",
          "tags": [
            "Oscillator/VCO",
            "Waveshaper"
          ],
          "size": 12.000001
        }
      ]
    },
    {
      "slug": "DHE-Modules",
      "website": "",
      "manual": "",
      "models": [
        {
          "slug": "Booster Stage",
          "author": "DHE-Modules",
          "name": "Booster Stage",
          "tags": [
            "Envelope Generator"
          ],
          "size": 8.0
        },
        {
          "slug": "Cubic",
          "author": "DHE-Modules",
          "name": "Cubic",
          "tags": [
            "Function Generator"
          ],
          "size": 5.00000048
        },
        {
          "slug": "Hostage",
          "author": "DHE-Modules",
          "name": "Hostage",
          "tags": [
            "Envelope Generator"
          ],
          "size": 5.00000048
        },
        {
          "slug": "Stage",
          "author": "DHE-Modules",
          "name": "Stage",
          "tags": [
            "Envelope Generator"
          ],
          "size": 5.00000048
        },
        {
          "slug": "Swave",
          "author": "DHE-Modules",
          "name": "Swave",
          "tags": [
            "Waveshaper"
          ],
          "size": 4.0
        },
        {
          "slug": "Upstage",
          "author": "DHE-Modules",
          "name": "Upstage",
          "tags": [
            "Envelope Generator"
          ],
          "size": 5.00000048
        }
      ]
    },
    {
      "slug": "DrumKit",
      "website": "https://github.com/JerrySievert/DrumKit",
      "manual": "https://github.com/JerrySievert/DrumKit/blob/master/README.md",
      "models": [
        {
          "slug": "Bass Drum 9",
          "author": "DrumKit",
          "name": "Bass Drum 9",
          "tags": [
            "Drum"
          ],
          "size": 3.00000024
        },
        {
          "slug": "Snare Drum N",
          "author": "DrumKit",
          "name": "Snare Drum N",
          "tags": [
            "Drum"
          ],
          "size": 3.00000024
        },
        {
          "slug": "Closed HiHat",
          "author": "DrumKit",
          "name": "Closed HiHat",
          "tags": [
            "Drum"
          ],
          "size": 3.00000024
        },
        {
          "slug": "Open HiHat",
          "author": "DrumKit",
          "name": "Open HiHat",
          "tags": [
            "Drum"
          ],
          "size": 3.00000024
        },
        {
          "slug": "DMX",
          "author": "DrumKit",
          "name": "DMX",
          "tags": [
            "Drum"
          ],
          "size": 3.00000024
        }
      ]
    },
    {
      "slug": "ESeries",
      "website": "",
      "manual": "",
      "models": [
        {
          "slug": "E340",
          "author": "E-Series",
          "name": "E340 Cloud Generator",
          "tags": [
            "Oscillator/VCO"
          ],
          "size": 14.000001
        }
      ]
    },
    {
      "slug": "ErraticInstruments",
      "website": "https://github.com/bafonso/Erratic",
      "manual": "https://github.com/bafonso/Erratic/blob/master/README.md",
      "models": [
        {
          "slug": "MPEToCV",
          "author": "Erratic Instruments",
          "name": "MPE to CV",
          "tags": [
            "MIDI",
            "External"
          ],
          "size": 10.000001
        },
        {
          "slug": "QuadMPEToCV",
          "author": "Erratic Instruments",
          "name": "Quad MPE To CV",
          "tags": [
            "MIDI",
            "External"
          ],
          "size": 16.0
        }
      ]
    },
    {
      "slug": "FrozenWasteland",
      "website": "https://github.com/almostEric/FrozenWasteland",
      "manual": "https://github.com/almostEric/FrozenWasteland/blob/master/README.md",
      "models": [
        {
          "slug": "BPMLFO",
          "author": "Frozen Wasteland",
          "name": "BPM LFO",
          "tags": [
            "LFO"
          ],
          "size": 10.000001
        },
        {
          "slug": "BPMLFO2",
          "author": "Frozen Wasteland",
          "name": "BPM LFO 2",
          "tags": [
            "LFO"
          ],
          "size": 10.000001
        },
        {
          "slug": "DamianLillard",
          "author": "Frozen Wasteland",
          "name": "Damian Lillard",
          "tags": [
            "Filter/VCF"
          ],
          "size": 11.000001
        },
        {
          "slug": "EverlastingGlottalStopper",
          "author": "Frozen Wasteland",
          "name": "Everlasting Glottal Stopper",
          "tags": [
            "Filter/VCF"
          ],
          "size": 11.000001
        },
        {
          "slug": "HairPick",
          "author": "Frozen Wasteland",
          "name": "Hair Pick",
          "tags": [
            "Filter/VCF"
          ],
          "size": 14.000001
        },
        {
          "slug": "LissajousLFO",
          "author": "Frozen Wasteland",
          "name": "Lissajous LFO",
          "tags": [
            "LFO"
          ],
          "size": 13.000001
        },
        {
          "slug": "MrBlueSky",
          "author": "Frozen Wasteland",
          "name": "Mr. Blue Sky",
          "tags": [
            "Effect"
          ],
          "size": 39.0000038
        },
        {
          "slug": "TheOneRingModulator",
          "author": "Frozen Wasteland",
          "name": "The One Ring Modulator",
          "tags": [
            "Ring Modulator"
          ],
          "size": 10.000001
        },
        {
          "slug": "PhasedLockedLoop",
          "author": "Frozen Wasteland",
          "name": "Phased Locked Loop",
          "tags": [
            "Oscillator/VCO"
          ],
          "size": 10.000001
        },
        {
          "slug": "PortlandWeather",
          "author": "Frozen Wasteland",
          "name": "Portland Weather",
          "tags": [
            "Delay"
          ],
          "size": 56.0000038
        },
        {
          "slug": "QuadEuclideanRhythm",
          "author": "Frozen Wasteland",
          "name": "Quad Euclidean Rhythm",
          "tags": [
            "Sequencer"
          ],
          "size": 26.0000019
        },
        {
          "slug": "QuadGolombRulerRhythm",
          "author": "Frozen Wasteland",
          "name": "Quad Golomb Ruler Rhythm",
          "tags": [
            "Sequencer"
          ],
          "size": 29.0000019
        },
        {
          "slug": "QuantussyCell",
          "author": "Frozen Wasteland",
          "name": "Quantussy Cell",
          "tags": [
            "Logic"
          ],
          "size": 6.00000048
        },
        {
          "slug": "RouletteLFO",
          "author": "Frozen Wasteland",
          "name": "Roulette LFO",
          "tags": [
            "LFO"
          ],
          "size": 13.000001
        },
        {
          "slug": "SeriouslySlowLFO",
          "author": "Frozen Wasteland",
          "name": "Seriously Slow LFO",
          "tags": [
            "LFO"
          ],
          "size": 10.000001
        },
        {
          "slug": "VoxInhumana",
          "author": "Frozen Wasteland",
          "name": "Vox Inhumana",
          "tags": [
            "Filter/VCF"
          ],
          "size": 14.000001
        },
        {
          "slug": "CDCSeriouslySlowLFO",
          "author": "Frozen Wasteland",
          "name": "Seriously Slow LFO - CDC Signature",
          "tags": [
            "LFO"
          ],
          "size": 10.000001
        }
      ]
    },
    {
      "slug": "Fundamental",
      "website": "",
      "manual": "",
      "models": [
        {
          "slug": "VCO",
          "author": "Fundamental",
          "name": "VCO-1",
          "tags": [
            "Oscillator/VCO"
          ],
          "size": 10.000001
        },
        {
          "slug": "VCO2",
          "author": "Fundamental",
          "name": "VCO-2",
          "tags": [
            "Oscillator/VCO"
          ],
          "size": 6.00000048
        },
        {
          "slug": "VCF",
          "author": "Fundamental",
          "name": "VCF",
          "tags": [
            "Filter/VCF"
          ],
          "size": 8.0
        },
        {
          "slug": "VCA",
          "author": "Fundamental",
          "name": "VCA",
          "tags": [
            "Amplifier/VCA",
            "Dual/Stereo"
          ],
          "size": 6.00000048
        },
        {
          "slug": "LFO",
          "author": "Fundamental",
          "name": "LFO-1",
          "tags": [
            "LFO"
          ],
          "size": 10.000001
        },
        {
          "slug": "LFO2",
          "author": "Fundamental",
          "name": "LFO-2",
          "tags": [
            "LFO"
          ],
          "size": 6.00000048
        },
        {
          "slug": "Delay",
          "author": "Fundamental",
          "name": "Delay",
          "tags": [
            "Delay"
          ],
          "size": 8.0
        },
        {
          "slug": "ADSR",
          "author": "Fundamental",
          "name": "ADSR",
          "tags": [
            "Envelope Generator"
          ],
          "size": 8.0
        },
        {
          "slug": "VCMixer",
          "author": "Fundamental",
          "name": "Mixer",
          "tags": [
            "Mixer",
            "Amplifier/VCA"
          ],
          "size": 10.000001
        },
        {
          "slug": "8vert",
          "author": "Fundamental",
          "name": "8vert",
          "tags": [
            "Attenuator"
          ],
          "size": 8.0
        },
        {
          "slug": "Unity",
          "author": "Fundamental",
          "name": "Unity",
          "tags": [
            "Mixer",
            "Utility",
            "Dual/Stereo"
          ],
          "size": 6.00000048
        },
        {
          "slug": "Mutes",
          "author": "Fundamental",
          "name": "Mutes",
          "tags": [
            "Switch"
          ],
          "size": 8.0
        },
        {
          "slug": "Scope",
          "author": "Fundamental",
          "name": "Scope",
          "tags": [
            "Visual"
          ],
          "size": 13.000001
        },
        {
          "slug": "SEQ3",
          "author": "Fundamental",
          "name": "SEQ-3",
          "tags": [
            "Sequencer"
          ],
          "size": 22.0000019
        },
        {
          "slug": "SequentialSwitch1",
          "author": "Fundamental",
          "name": "Sequential Switch 1",
          "tags": [
            "Utility"
          ],
          "size": 3.00000024
        },
        {
          "slug": "SequentialSwitch2",
          "author": "Fundamental",
          "name": "Sequential Switch 2",
          "tags": [
            "Utility"
          ],
          "size": 3.00000024
        }
      ]
    },
    {
      "slug": "Gratrix",
      "website": "",
      "manual": "",
      "models": [
        {
          "slug": "VCO-F1",
          "author": "Gratrix",
          "name": "VCO-F1",
          "tags": [
            "Oscillator/VCO"
          ],
          "size": 24.0000019
        },
        {
          "slug": "VCO-F2",
          "author": "Gratrix",
          "name": "VCO-F2",
          "tags": [
            "Oscillator/VCO"
          ],
          "size": 12.000001
        },
        {
          "slug": "VCF-F1",
          "author": "Gratrix",
          "name": "VCF-F1",
          "tags": [
            "Filter/VCF"
          ],
          "size": 18.0
        },
        {
          "slug": "VCA-F1",
          "author": "Gratrix",
          "name": "VCA-F1",
          "tags": [
            "Amplifier/VCA"
          ],
          "size": 12.000001
        },
        {
          "slug": "ADSR-F1",
          "author": "Gratrix",
          "name": "ADSR-F1",
          "tags": [
            "Envelope Generator"
          ],
          "size": 12.000001
        },
        {
          "slug": "Chord-G1",
          "author": "Gratrix",
          "name": "Chord-G1",
          "tags": [
            "Synth Voice"
          ],
          "size": 18.0
        },
        {
          "slug": "Octave-G1",
          "author": "Gratrix",
          "name": "Octave-G1",
          "tags": [
            "Synth Voice"
          ],
          "size": 12.000001
        },
        {
          "slug": "Fade-G1",
          "author": "Gratrix",
          "name": "Fade-G1",
          "tags": [
            "Mixer"
          ],
          "size": 12.000001
        },
        {
          "slug": "Fade-G2",
          "author": "Gratrix",
          "name": "Fade-G2",
          "tags": [
            "Mixer"
          ],
          "size": 18.0
        },
        {
          "slug": "Binary-G1",
          "author": "Gratrix",
          "name": "Binary-G1",
          "tags": [
            "Logic"
          ],
          "size": 12.000001
        },
        {
          "slug": "Seq-G1-alpha1",
          "author": "Gratrix",
          "name": "Seq-G1 (alpha)",
          "tags": [
            "Sequencer"
          ],
          "size": 30.0000019
        },
        {
          "slug": "Seq-G2-alpha1",
          "author": "Gratrix",
          "name": "Seq-G2 (alpha)",
          "tags": [
            "Sequencer"
          ],
          "size": 54.0000038
        },
        {
          "slug": "Keys-G1",
          "author": "Gratrix",
          "name": "Keys-G1",
          "tags": [
            "Visual"
          ],
          "size": 36.0
        },
        {
          "slug": "VU-G1",
          "author": "Gratrix",
          "name": "VU-G1",
          "tags": [
            "Visual"
          ],
          "size": 6.00000048
        },
        {
          "slug": "Scope-G1",
          "author": "Gratrix",
          "name": "Scope-G1",
          "tags": [
            "Visual"
          ],
          "size": 24.0000019
        },
        {
          "slug": "Blank3",
          "author": "Gratrix",
          "name": "Blank 3",
          "tags": [
            "Blank"
          ],
          "size": 3.00000024
        },
        {
          "slug": "Blank6",
          "author": "Gratrix",
          "name": "Blank 6",
          "tags": [
            "Blank"
          ],
          "size": 6.00000048
        },
        {
          "slug": "Blank9",
          "author": "Gratrix",
          "name": "Blank 9",
          "tags": [
            "Blank"
          ],
          "size": 9.0
        },
        {
          "slug": "Blank12",
          "author": "Gratrix",
          "name": "Blank 12",
          "tags": [
            "Blank"
          ],
          "size": 12.000001
        }
      ]
    },
    {
      "slug": "HetrickCV",
      "website": "https://github.com/mhetrick/hetrickcv",
      "manual": "https://github.com/mhetrick/hetrickcv/blob/master/README.md",
      "models": [
        {
          "slug": "2To4",
          "author": "HetrickCV",
          "name": "2 To 4 Mix Matrix",
          "tags": [
            "Mixer"
          ],
          "size": 6.00000048
        },
        {
          "slug": "AnalogToDigital",
          "author": "HetrickCV",
          "name": "Analog to Digital",
          "tags": [
            "Logic"
          ],
          "size": 12.000001
        },
        {
          "slug": "ASR",
          "author": "HetrickCV",
          "name": "ASR",
          "tags": [
            "Sequencer"
          ],
          "size": 6.00000048
        },
        {
          "slug": "Bitshift",
          "author": "HetrickCV",
          "name": "Bitshift",
          "tags": [
            "Distortion",
            "Effect"
          ],
          "size": 6.00000048
        },
        {
          "slug": "BlankPanel",
          "author": "HetrickCV",
          "name": "Blank Panel",
          "tags": [],
          "size": 6.00000048
        },
        {
          "slug": "Boolean3",
          "author": "HetrickCV",
          "name": "Boolean Logic",
          "tags": [
            "Logic"
          ],
          "size": 6.00000048
        },
        {
          "slug": "Comparator",
          "author": "HetrickCV",
          "name": "Comparator",
          "tags": [
            "Logic"
          ],
          "size": 6.00000048
        },
        {
          "slug": "Contrast",
          "author": "HetrickCV",
          "name": "Contrast",
          "tags": [
            "Effect"
          ],
          "size": 6.00000048
        },
        {
          "slug": "Crackle",
          "author": "HetrickCV",
          "name": "Crackle",
          "tags": [
            "Noise"
          ],
          "size": 6.00000048
        },
        {
          "slug": "Delta",
          "author": "HetrickCV",
          "name": "Delta",
          "tags": [
            "Logic"
          ],
          "size": 6.00000048
        },
        {
          "slug": "DigitalToAnalog",
          "author": "HetrickCV",
          "name": "Digital to Analog",
          "tags": [
            "Logic"
          ],
          "size": 12.000001
        },
        {
          "slug": "Dust",
          "author": "HetrickCV",
          "name": "Dust",
          "tags": [
            "Noise",
            "Granular"
          ],
          "size": 6.00000048
        },
        {
          "slug": "Exponent",
          "author": "HetrickCV",
          "name": "Exponent",
          "tags": [
            "Waveshaper"
          ],
          "size": 6.00000048
        },
        {
          "slug": "FlipFlop",
          "author": "HetrickCV",
          "name": "Flip-Flop",
          "tags": [
            "Logic"
          ],
          "size": 6.00000048
        },
        {
          "slug": "FlipPan",
          "author": "HetrickCV",
          "name": "Flip Pan",
          "tags": [
            "Panning"
          ],
          "size": 6.00000048
        },
        {
          "slug": "Gate Junction",
          "author": "HetrickCV",
          "name": "Gate Junction",
          "tags": [
            "Switch",
            "Logic"
          ],
          "size": 12.000001
        },
        {
          "slug": "Logic Combine",
          "author": "HetrickCV",
          "name": "OR Logic (Gate Combiner)",
          "tags": [
            "Logic"
          ],
          "size": 8.0
        },
        {
          "slug": "RandomGates",
          "author": "HetrickCV",
          "name": "Random Gates",
          "tags": [
            "Random"
          ],
          "size": 12.000001
        },
        {
          "slug": "Rotator",
          "author": "HetrickCV",
          "name": "Rotator",
          "tags": [
            "Switch"
          ],
          "size": 12.000001
        },
        {
          "slug": "Scanner",
          "author": "HetrickCV",
          "name": "Scanner",
          "tags": [
            "Mixer"
          ],
          "size": 18.0
        },
        {
          "slug": "Waveshaper",
          "author": "HetrickCV",
          "name": "Waveshaper",
          "tags": [
            "Waveshaper",
            "Distortion",
            "Effect"
          ],
          "size": 6.00000048
        }
      ]
    },
    {
      "slug": "IO-Simple",
      "website": "https://iohannrabeson.github.io/VCVRack-Simple/",
      "manual": "",
      "models": [
        {
          "slug": "IO-ButtonTrigger",
          "author": "Simple",
          "name": "Button Trigger",
          "tags": [
            "Utility"
          ],
          "size": 4.0
        },
        {
          "slug": "IO-ClockDivider",
          "author": "Simple",
          "name": "Clock Divider",
          "tags": [
            "Clock"
          ],
          "size": 10.000001
        },
        {
          "slug": "IO-Clock",
          "author": "Simple",
          "name": "Clock",
          "tags": [
            "Clock"
          ],
          "size": 6.00000048
        }
      ]
    },
    {
      "slug": "ImpromptuModular",
      "website": "",
      "manual": "",
      "models": [
        {
          "slug": "Tact",
          "author": "Impromptu Modular",
          "name": "CTRL - Tact",
          "tags": [
            "Controller"
          ],
          "size": 12.000001
        },
        {
          "slug": "Twelve-Key",
          "author": "Impromptu Modular",
          "name": "CTRL - Twelve-Key",
          "tags": [
            "Controller"
          ],
          "size": 20.0000019
        },
        {
          "slug": "Clocked",
          "author": "Impromptu Modular",
          "name": "CLK - Clocked",
          "tags": [
            "Clock"
          ],
          "size": 20.0000019
        },
        {
          "slug": "Phrase-Seq-16",
          "author": "Impromptu Modular",
          "name": "SEQ - Phrase-Seq-16",
          "tags": [
            "Sequencer"
          ],
          "size": 30.0000019
        },
        {
          "slug": "Phrase-Seq-32",
          "author": "Impromptu Modular",
          "name": "SEQ - Phrase-Seq-32",
          "tags": [
            "Sequencer"
          ],
          "size": 32.0
        },
        {
          "slug": "Gate-Seq-64",
          "author": "Impromptu Modular",
          "name": "SEQ - Gate-Seq-64",
          "tags": [
            "Sequencer"
          ],
          "size": 24.0000019
        },
        {
          "slug": "Write-Seq-32",
          "author": "Impromptu Modular",
          "name": "SEQ - Write-Seq-32",
          "tags": [
            "Sequencer"
          ],
          "size": 27.0000019
        },
        {
          "slug": "Write-Seq-64",
          "author": "Impromptu Modular",
          "name": "SEQ - Write-Seq-64",
          "tags": [
            "Sequencer"
          ],
          "size": 27.0000019
        },
        {
          "slug": "Semi-Modular Synth",
          "author": "Impromptu Modular",
          "name": "MISC - Semi-Modular Synth",
          "tags": [
            "Sequencer",
            "Oscillator/VCO"
          ],
          "size": 56.0000038
        },
        {
          "slug": "Blank-Panel",
          "author": "Impromptu Modular",
          "name": "MISC - Blank-Panel",
          "tags": [
            "Blank"
          ],
          "size": 10.000001
        }
      ]
    },
    {
      "slug": "JE",
      "website": "",
      "manual": "",
      "models": [
        {
          "slug": "RingModulator",
          "author": "JE",
          "name": "Ring Modulator",
          "tags": [
            "Effect",
            "Ring Modulator"
          ],
          "size": 10.000001
        },
        {
          "slug": "SimpleWaveFolder",
          "author": "JE",
          "name": "Simple Wave Folder",
          "tags": [
            "Effect",
            "Waveshaper"
          ],
          "size": 7.00000048
        }
      ]
    },
    {
      "slug": "JW-Modules",
      "website": "",
      "manual": "",
      "models": [
        {
          "slug": "0Cat",
          "author": "JW-Modules",
          "name": "0Cat",
          "tags": [
            "Visual"
          ],
          "size": 4.0
        },
        {
          "slug": "BouncyBalls",
          "author": "JW-Modules",
          "name": "Bouncy Balls",
          "tags": [
            "Sequencer",
            "Visual"
          ],
          "size": 48.0000038
        },
        {
          "slug": "FullScope",
          "author": "JW-Modules",
          "name": "Full Scope",
          "tags": [
            "Visual"
          ],
          "size": 17.0
        },
        {
          "slug": "GridSeq",
          "author": "JW-Modules",
          "name": "GridSeq",
          "tags": [
            "Sequencer"
          ],
          "size": 20.0000019
        },
        {
          "slug": "Quantizer",
          "author": "JW-Modules",
          "name": "Quantizer",
          "tags": [
            "Quantizer"
          ],
          "size": 4.0
        },
        {
          "slug": "MinMax",
          "author": "JW-Modules",
          "name": "Min Max",
          "tags": [
            "Utility"
          ],
          "size": 6.00000048
        },
        {
          "slug": "NoteSeq",
          "author": "JW-Modules",
          "name": "NoteSeq",
          "tags": [
            "Sequencer"
          ],
          "size": 48.0000038
        },
        {
          "slug": "SimpleClock",
          "author": "JW-Modules",
          "name": "Simple Clock",
          "tags": [
            "Clock",
            "Random"
          ],
          "size": 4.0
        },
        {
          "slug": "ThingThing",
          "author": "JW-Modules",
          "name": "Thing Thing",
          "tags": [
            "Visual"
          ],
          "size": 20.0000019
        },
        {
          "slug": "WavHead",
          "author": "JW-Modules",
          "name": "Wav Head",
          "tags": [
            "Visual"
          ],
          "size": 4.0
        },
        {
          "slug": "XYPad",
          "author": "JW-Modules",
          "name": "XY Pad",
          "tags": [
            "LFO",
            "Envelope Generator",
            "Random",
            "Oscillator/VCO",
            "Sample and Hold"
          ],
          "size": 24.0000019
        }
      ]
    },
    {
      "slug": "KarateSnoopy",
      "website": "https://github.com/KarateSnoopy/vcv-karatesnoopy",
      "manual": "",
      "models": [
        {
          "slug": "KSnpy 2D Grid Seq",
          "author": "KarateSnoopy",
          "name": "KSnpy 2D Grid Seq",
          "tags": [
            "Sequencer"
          ],
          "size": 22.0000019
        }
      ]
    },
    {
      "slug": "Koralfx-Modules",
      "website": "https://github.com/koralfx/Koralfx-Modules",
      "manual": "https://github.com/koralfx/Koralfx-Modules/blob/master/README.md",
      "models": [
        {
          "slug": "Beatovnik",
          "author": "Koralfx-Modules",
          "name": "Beatovnik",
          "tags": [
            "Clock",
            "Clock Modulator"
          ],
          "size": 6.00000048
        },
        {
          "slug": "Mixovnik",
          "author": "Koralfx-Modules",
          "name": "Mixovnik",
          "tags": [
            "Mixer"
          ],
          "size": 58.0000038
        },
        {
          "slug": "Nullovnik4",
          "author": "Koralfx-Modules",
          "name": "Nullovnik 4",
          "tags": [
            "Blank"
          ],
          "size": 4.0
        },
        {
          "slug": "Nullovnik6",
          "author": "Koralfx-Modules",
          "name": "Nullovnik 6",
          "tags": [
            "Blank"
          ],
          "size": 6.00000048
        },
        {
          "slug": "Presetovnik",
          "author": "Koralfx-Modules",
          "name": "Presetovnik",
          "tags": [
            "Utility"
          ],
          "size": 16.0
        },
        {
          "slug": "Quantovnik",
          "author": "Koralfx-Modules",
          "name": "Quantovnik",
          "tags": [
            "Effect"
          ],
          "size": 6.00000048
        },
        {
          "slug": "Scorovnik",
          "author": "Koralfx-Modules",
          "name": "Scorovnik",
          "tags": [
            "Sequencer"
          ],
          "size": 66.0
        }
      ]
    },
    {
      "slug": "LOGinstruments",
      "website": "https://github.com/leopard86/LOGinstruments",
      "manual": "https://github.com/leopard86/LOGinstruments/blob/master/README.md",
      "models": [
        {
          "slug": "Constant",
          "author": "LOGinstruments",
          "name": "DC Offset Gen",
          "tags": [
            "Utility"
          ],
          "size": 8.0
        },
        {
          "slug": "Constant2",
          "author": "LOGinstruments",
          "name": "Precise DC Gen",
          "tags": [
            "Utility"
          ],
          "size": 8.0
        },
        {
          "slug": "Speck",
          "author": "LOGinstruments",
          "name": "Spectrum Analyzer",
          "tags": [
            "Visual",
            "Utility"
          ],
          "size": 20.0000019
        },
        {
          "slug": "Britix",
          "author": "LOGinstruments",
          "name": "Matrix Modulator",
          "tags": [
            "Logic",
            "Mixer",
            "Utility"
          ],
          "size": 20.0000019
        },
        {
          "slug": "Compa",
          "author": "LOGinstruments",
          "name": "Comparator",
          "tags": [
            "Digital",
            "Quantizer"
          ],
          "size": 6.00000048
        },
        {
          "slug": "LessMess",
          "author": "LOGinstruments",
          "name": "Tidy Up Cables",
          "tags": [
            "Utility",
            "Visual"
          ],
          "size": 16.0
        },
        {
          "slug": "Velvet",
          "author": "LOGinstruments",
          "name": "Velvet Noise Gen",
          "tags": [
            "Noise",
            "Random"
          ],
          "size": 10.000001
        },
        {
          "slug": "Crystal",
          "author": "LOGinstruments",
          "name": "Crystal",
          "tags": [
            "Oscillator/VCO"
          ],
          "size": 13.000001
        }
      ]
    },
    {
      "slug": "LindenbergResearch",
      "website": "",
      "manual": "",
      "models": [
        {
          "slug": "LPFilter24dB",
          "author": "Lindenberg Research",
          "name": "24dB Lowpass Filter",
          "tags": [
            "Filter/VCF"
          ],
          "size": 10.000001
        },
        {
          "slug": "MS20 VCF",
          "author": "Lindenberg Research",
          "name": "Valerie MS20 Filter",
          "tags": [
            "Filter/VCF"
          ],
          "size": 12.000001
        },
        {
          "slug": "VCF",
          "author": "Lindenberg Research",
          "name": "Alma Ladder Filter",
          "tags": [
            "Filter/VCF"
          ],
          "size": 12.000001
        },
        {
          "slug": "ReShaper",
          "author": "Lindenberg Research",
          "name": "ReShaper Wavefolder",
          "tags": [
            "Waveshaper"
          ],
          "size": 8.0
        },
        {
          "slug": "BlankPanel 01",
          "author": "Lindenberg Research",
          "name": "Blank Panel 20TE",
          "tags": [
            "Blank"
          ],
          "size": 18.0
        },
        {
          "slug": "BlankPanel 02",
          "author": "Lindenberg Research",
          "name": "Blank Panel 12TE",
          "tags": [
            "Blank"
          ],
          "size": 12.000001
        }
      ]
    },
    {
      "slug": "ML_modules",
      "website": "",
      "manual": "",
      "models": [
        {
          "slug": "Quantizer",
          "author": "ML modules",
          "name": "Quantizer (h-bar)",
          "tags": [
            "Quantizer"
          ],
          "size": 3.00000024
        },
        {
          "slug": "Quantum",
          "author": "ML modules",
          "name": "Quantum",
          "tags": [
            "Quantizer"
          ],
          "size": 8.0
        },
        {
          "slug": "TrigBuf",
          "author": "ML modules",
          "name": "Trigger Buffer",
          "tags": [
            "Utility"
          ],
          "size": 4.0
        },
        {
          "slug": "SeqSwitch",
          "author": "ML modules",
          "name": "Sequential Switch 8->1",
          "tags": [
            "Switch",
            "Sequencer"
          ],
          "size": 8.0
        },
        {
          "slug": "SeqSwitch2",
          "author": "ML modules",
          "name": "Sequential Switch 1->8",
          "tags": [
            "Switch"
          ],
          "size": 8.0
        },
        {
          "slug": "ShiftRegister",
          "author": "ML modules",
          "name": "Shift Register",
          "tags": [
            "Sample and Hold"
          ],
          "size": 4.0
        },
        {
          "slug": "Evolution",
          "author": "ML modules",
          "name": "Evolution",
          "tags": [
            "Sequencer",
            "Sample and Hold"
          ],
          "size": 8.0
        },
        {
          "slug": "FreeVerb",
          "author": "ML modules",
          "name": "FreeVerb",
          "tags": [
            "Reverb"
          ],
          "size": 6.00000048
        },
        {
          "slug": "Sum8",
          "author": "ML modules",
          "name": "Sum8",
          "tags": [
            "Utility",
            "Mixer"
          ],
          "size": 3.00000024
        },
        {
          "slug": "Sum8mk2",
          "author": "ML modules",
          "name": "Sum8 MkII",
          "tags": [
            "Utility",
            "Mixer"
          ],
          "size": 5.00000048
        },
        {
          "slug": "SH8",
          "author": "ML modules",
          "name": "S&H 8",
          "tags": [
            "Sample and Hold"
          ],
          "size": 8.0
        },
        {
          "slug": "Constants",
          "author": "ML modules",
          "name": "Constants",
          "tags": [
            "Utility"
          ],
          "size": 6.00000048
        },
        {
          "slug": "Counter",
          "author": "ML modules",
          "name": "Counter",
          "tags": [
            "Utility"
          ],
          "size": 6.00000048
        },
        {
          "slug": "TrigDelay",
          "author": "ML modules",
          "name": "Trigger Delay",
          "tags": [
            "Utility",
            "Delay"
          ],
          "size": 6.00000048
        },
        {
          "slug": "BPMdetect",
          "author": "ML modules",
          "name": "BPM Tools",
          "tags": [
            "Utility",
            "Clock"
          ],
          "size": 10.000001
        },
        {
          "slug": "VoltMeter",
          "author": "ML modules",
          "name": "Volt Meter",
          "tags": [
            "Utility"
          ],
          "size": 8.0
        },
        {
          "slug": "OctaFlop",
          "author": "ML modules",
          "name": "OctaFlop",
          "tags": [
            "Utility",
            "Clock"
          ],
          "size": 8.0
        },
        {
          "slug": "OctaTrig",
          "author": "ML modules",
          "name": "OctaTrig",
          "tags": [
            "Utility"
          ],
          "size": 10.000001
        },
        {
          "slug": "OctaSwitch",
          "author": "ML modules",
          "name": "OctaSwitch",
          "tags": [
            "Switch",
            "Utility"
          ],
          "size": 10.000001
        },
        {
          "slug": "TrigSwitch",
          "author": "ML modules",
          "name": "TrigSwitch 8->1",
          "tags": [
            "Switch",
            "Utility"
          ],
          "size": 8.0
        },
        {
          "slug": "TrigSwitch2",
          "author": "ML modules",
          "name": "TrigSwitch 1->8",
          "tags": [
            "Switch",
            "Utility"
          ],
          "size": 8.0
        },
        {
          "slug": "TrigSwitch3",
          "author": "ML modules",
          "name": "TrigSwitch3 8->1",
          "tags": [
            "Switch",
            "Utility"
          ],
          "size": 12.000001
        },
        {
          "slug": "TrigSwitch3_2",
          "author": "ML modules",
          "name": "TrigSwitch3 1->8",
          "tags": [
            "Switch",
            "Utility"
          ],
          "size": 12.000001
        }
      ]
    },
    {
      "slug": "MSM",
      "website": "https://github.com/Phal-anx/MSM",
      "manual": "",
      "models": [
        {
          "slug": "Blank Panel",
          "author": "MSM",
          "name": "Blank Panel",
          "tags": [
            "Blank"
          ],
          "size": 8.0
        },
        {
          "slug": "Fade",
          "author": "MSM",
          "name": "Fade",
          "tags": [
            "Mixer"
          ],
          "size": 8.0
        },
        {
          "slug": "MLFO",
          "author": "MSM",
          "name": "MLFO",
          "tags": [
            "LFO"
          ],
          "size": 16.0
        },
        {
          "slug": "Mult",
          "author": "MSM",
          "name": "Mult",
          "tags": [
            "Multiple"
          ],
          "size": 9.0
        },
        {
          "slug": "Random Source-1",
          "author": "MSM",
          "name": "Random Source-1",
          "tags": [
            "Sample and Hold"
          ],
          "size": 4.0
        },
        {
          "slug": "Random Source-2",
          "author": "MSM",
          "name": "Random Source-2",
          "tags": [
            "Sample and Hold"
          ],
          "size": 8.0
        },
        {
          "slug": "SwitchedMult",
          "author": "MSM",
          "name": "SwitchedMult",
          "tags": [
            "Multiple"
          ],
          "size": 13.000001
        },
        {
          "slug": "WaveShaper",
          "author": "MSM",
          "name": "WaveShaper",
          "tags": [
            "Utility"
          ],
          "size": 11.000001
        }
      ]
    },
    {
      "slug": "MrLumps",
      "website": "https://github.com/djpeterso23662/MrLumps",
      "manual": "https://github.com/djpeterso23662/MrLumps/blob/master/README.md",
      "models": [
        {
          "slug": "SEQE",
          "author": "MrLumps",
          "name": "SEQ-Euclid",
          "tags": [
            "Sequencer"
          ],
          "size": 24.9333344
        },
        {
          "slug": "VCS1",
          "author": "MrLumps",
          "name": "1x8 Voltage Controlled Switch",
          "tags": [
            "Switch"
          ],
          "size": 4.0
        },
        {
          "slug": "VCS2",
          "author": "MrLumps",
          "name": "2x4 Voltage Controlled Switch",
          "tags": [
            "Switch"
          ],
          "size": 4.0
        }
      ]
    },
    {
      "slug": "NauModular",
      "website": "http://naus3a.github.io/NauModular",
      "manual": "http://naus3a.github.io/NauModular",
      "models": [
        {
          "slug": "Tension",
          "author": "NauModular",
          "name": "Tension",
          "tags": [
            "Function Generator"
          ],
          "size": 6.00000048
        },
        {
          "slug": "Function",
          "author": "NauModular",
          "name": "Function",
          "tags": [
            "Function Generator"
          ],
          "size": 6.00000048
        },
        {
          "slug": "Perlin",
          "author": "NauModular",
          "name": "Perlin",
          "tags": [
            "Noise"
          ],
          "size": 6.00000048
        },
        {
          "slug": "S&h(it)",
          "author": "NauModular",
          "name": "S&h(it)",
          "tags": [
            "Sample and Hold"
          ],
          "size": 3.00000024
        },
        {
          "slug": "BitHammer",
          "author": "NauModular",
          "name": "BitHammer",
          "tags": [
            "Logic"
          ],
          "size": 6.00000048
        },
        {
          "slug": "Osc",
          "author": "NauModular",
          "name": "Osc",
          "tags": [
            "Controller"
          ],
          "size": 6.00000048
        }
      ]
    },
    {
      "slug": "Nohmad",
      "website": "https://github.com/joelrobichaud/Nohmad",
      "manual": "",
      "models": [
        {
          "slug": "Noise",
          "author": "Nohmad",
          "name": "Noise",
          "tags": [
            "Noise"
          ],
          "size": 3.00000024
        },
        {
          "slug": "StrangeAttractors",
          "author": "Nohmad",
          "name": "Strange Attractors",
          "tags": [
            "Oscillator/VCO",
            "LFO"
          ],
          "size": 12.000001
        }
      ]
    },
    {
      "slug": "NonLinearInstruments",
      "website": "https://github.com/NonLinearInstruments/NLNRI_VCVRackPlugins",
      "manual": "https://github.com/NonLinearInstruments/NLNRI_VCVRackPlugins/blob/master/README.md",
      "models": [
        {
          "slug": "QUADiT",
          "author": "NonLinearInstruments",
          "name": "Quadratic Iterator",
          "tags": [
            "Oscillator/VCO"
          ],
          "size": 6.00000048
        },
        {
          "slug": "BallisticENV",
          "author": "NonLinearInstruments",
          "name": "Ballistic ENV",
          "tags": [
            "Envelope Generator"
          ],
          "size": 8.0
        },
        {
          "slug": "LuciCell",
          "author": "NonLinearInstruments",
          "name": "Luci Cell",
          "tags": [
            "Oscillator/VCO"
          ],
          "size": 25.0000019
        },
        {
          "slug": "Luci4AudioSum",
          "author": "NonLinearInstruments",
          "name": "Luci 4 Audio Sum",
          "tags": [
            "Mixer"
          ],
          "size": 2.0
        },
        {
          "slug": "Luci4ParamDistr",
          "author": "NonLinearInstruments",
          "name": "Luci 4 Param Distr",
          "tags": [
            "Multiple"
          ],
          "size": 2.0
        },
        {
          "slug": "LuciControlRND",
          "author": "NonLinearInstruments",
          "name": "Luci Ctrl RAND",
          "tags": [
            "Controller"
          ],
          "size": 25.0000019
        },
        {
          "slug": "LuciControlFREQ",
          "author": "NonLinearInstruments",
          "name": "Luci Ctrl FREQ",
          "tags": [
            "Controller"
          ],
          "size": 25.0000019
        },
        {
          "slug": "LuciControlINFL",
          "author": "NonLinearInstruments",
          "name": "Luci Ctrl INFLUENCE",
          "tags": [
            "Controller"
          ],
          "size": 25.0000019
        }
      ]
    },
    {
      "slug": "Ohmer",
      "website": "https://github.com/DomiKamu/Ohmer-Modules/",
      "manual": "https://github.com/DomiKamu/Ohmer-Modules/blob/master/README.md",
      "models": [
        {
          "slug": "KlokSpid",
          "author": "Ohmer Modules",
          "name": "KlokSpid",
          "tags": [
            "Clock",
            "Clock Modulator"
          ],
          "size": 8.0
        },
        {
          "slug": "RKD",
          "author": "Ohmer Modules",
          "name": "RKD (Rotate Klok Divider)",
          "tags": [
            "Clock Modulator"
          ],
          "size": 4.0
        },
        {
          "slug": "RKDBRK",
          "author": "Ohmer Modules",
          "name": "RKD with \"Break\"",
          "tags": [
            "Clock Modulator"
          ],
          "size": 8.0
        },
        {
          "slug": "Metriks",
          "author": "Ohmer Modules",
          "name": "Metriks",
          "tags": [
            "Visual"
          ],
          "size": 8.0
        },
        {
          "slug": "SplitterModule",
          "author": "Ohmer Modules",
          "name": "Splitter 1x9",
          "tags": [
            "Multiple",
            "Utility"
          ],
          "size": 2.0
        },
        {
          "slug": "OhmerBlank1",
          "author": "Ohmer Modules",
          "name": "1 HP Blank Panel",
          "tags": [
            "Blank"
          ],
          "size": 1.0
        },
        {
          "slug": "OhmerBlank2",
          "author": "Ohmer Modules",
          "name": "2 HP Blank Panel",
          "tags": [
            "Blank"
          ],
          "size": 2.0
        },
        {
          "slug": "OhmerBlank4",
          "author": "Ohmer Modules",
          "name": "4 HP Blank Panel",
          "tags": [
            "Blank"
          ],
          "size": 4.0
        },
        {
          "slug": "OhmerBlank8",
          "author": "Ohmer Modules",
          "name": "8 HP Blank Panel",
          "tags": [
            "Blank"
          ],
          "size": 8.0
        },
        {
          "slug": "OhmerBlank16",
          "author": "Ohmer Modules",
          "name": "16 HP Blank Panel",
          "tags": [
            "Blank"
          ],
          "size": 16.0
        },
        {
          "slug": "OhmerBlank32",
          "author": "Ohmer Modules",
          "name": "32 HP Blank Panel",
          "tags": [
            "Blank"
          ],
          "size": 32.0
        }
      ]
    },
    {
      "slug": "PG-Instruments",
      "website": "",
      "manual": "",
      "models": [
        {
          "slug": "PGSEQ3",
          "author": "PG-Instruments",
          "name": "PG-SEQ-3",
          "tags": [
            "Sequencer"
          ],
          "size": 44.0000038
        },
        {
          "slug": "PGPanner",
          "author": "PG-Instruments",
          "name": "PG Panner",
          "tags": [
            "Attenuator"
          ],
          "size": 5.00000048
        },
        {
          "slug": "PGQuadPanner",
          "author": "PG-Instruments",
          "name": "PG Quad Panner",
          "tags": [
            "Attenuator"
          ],
          "size": 13.000001
        },
        {
          "slug": "PGOctPanner",
          "author": "PG-Instruments",
          "name": "PG Oct Panner",
          "tags": [
            "Attenuator"
          ],
          "size": 13.000001
        },
        {
          "slug": "PGVCF",
          "author": "PG-Instruments",
          "name": "PG VCF",
          "tags": [
            "Attenuator"
          ],
          "size": 13.000001
        },
        {
          "slug": "PGStereoVCF",
          "author": "PG-Instruments",
          "name": "PG Stereo VCF",
          "tags": [
            "Attenuator"
          ],
          "size": 13.000001
        },
        {
          "slug": "PGEcho",
          "author": "PG-Instruments",
          "name": "PG Echo",
          "tags": [
            "Delay"
          ],
          "size": 13.000001
        },
        {
          "slug": "PGStereoEcho",
          "author": "PG-Instruments",
          "name": "PG Stereo Echo",
          "tags": [
            "Delay"
          ],
          "size": 13.000001
        },
        {
          "slug": "PGStereoPingPongEcho",
          "author": "PG-Instruments",
          "name": "PG Stereo Ping Pong Echo",
          "tags": [
            "Delay"
          ],
          "size": 13.000001
        }
      ]
    },
    {
      "slug": "PvC",
      "website": "",
      "manual": "",
      "models": [
        {
          "slug": "Heads",
          "author": "PvC",
          "name": "Heads",
          "tags": [
            "Logic",
            "Switch",
            "Random"
          ],
          "size": 4.0
        },
        {
          "slug": "Tails",
          "author": "PvC",
          "name": "Tails",
          "tags": [
            "Logic",
            "Switch",
            "Random"
          ],
          "size": 4.0
        },
        {
          "slug": "BangDaButton",
          "author": "PvC",
          "name": "BangDaButton",
          "tags": [
            "Controller",
            "Switch"
          ],
          "size": 6.00000048
        },
        {
          "slug": "Compair",
          "author": "PvC",
          "name": "Compair",
          "tags": [
            "Logic",
            "Dual/Stereo",
            "Clock Modulator"
          ],
          "size": 4.0
        },
        {
          "slug": "CoSuOf",
          "author": "PvC",
          "name": "CoSuOf",
          "tags": [
            "Logic",
            "Attenuator"
          ],
          "size": 4.0
        },
        {
          "slug": "FlipOLogic",
          "author": "PvC",
          "name": "FlipOLogic",
          "tags": [
            "Logic",
            "Switch",
            "Clock Modulator"
          ],
          "size": 6.00000048
        },
        {
          "slug": "Geighths",
          "author": "PvC",
          "name": "Geighths",
          "tags": [
            "Logic",
            "Sample and Hold"
          ],
          "size": 4.0
        },
        {
          "slug": "ShutIt",
          "author": "PvC",
          "name": "ShutIt",
          "tags": [
            "Switch",
            "Multiple"
          ],
          "size": 6.00000048
        },
        {
          "slug": "SlimSeq",
          "author": "PvC",
          "name": "SlimSeq",
          "tags": [
            "Sequencer",
            "Switch"
          ],
          "size": 10.000001
        },
        {
          "slug": "SumIt",
          "author": "PvC",
          "name": "SumIt",
          "tags": [
            "Blank"
          ],
          "size": 6.00000048
        },
        {
          "slug": "TaHaSaHaN",
          "author": "PvC",
          "name": "TaHaSaHaN",
          "tags": [
            "Sample and Hold",
            "Noise",
            "Random"
          ],
          "size": 2.0
        },
        {
          "slug": "Vamps",
          "author": "PvC",
          "name": "Vamps",
          "tags": [
            "Amplifier/VCA",
            "Attenuator",
            "Dual/Stereo"
          ],
          "size": 2.0
        },
        {
          "slug": "Vubar",
          "author": "PvC",
          "name": "Vubar",
          "tags": [
            "Visual"
          ],
          "size": 2.0
        },
        {
          "slug": "PvCBlank",
          "author": "PvC",
          "name": "PvCBlank",
          "tags": [
            "Blank"
          ],
          "size": 34.0
        }
      ]
    },
    {
      "slug": "Qwelk",
      "website": "",
      "manual": "",
      "models": [
        {
          "slug": "Automaton",
          "author": "Qwelk",
          "name": "Automaton",
          "tags": [
            "Sequencer"
          ],
          "size": 8.0
        },
        {
          "slug": "Byte",
          "author": "Qwelk",
          "name": "Byte",
          "tags": [
            "Utility",
            "Logic"
          ],
          "size": 2.0
        },
        {
          "slug": "Chaos",
          "author": "Qwelk",
          "name": "Chaos",
          "tags": [
            "Sequencer"
          ],
          "size": 16.0
        },
        {
          "slug": "Column",
          "author": "Qwelk",
          "name": "Column",
          "tags": [
            "Mixer"
          ],
          "size": 4.0
        },
        {
          "slug": "Gate",
          "author": "Qwelk",
          "name": "Gate",
          "tags": [
            "Utility",
            "Attenuator"
          ],
          "size": 2.0
        },
        {
          "slug": "OR",
          "author": "Qwelk",
          "name": "OR",
          "tags": [
            "Utility",
            "Logic"
          ],
          "size": 2.0
        },
        {
          "slug": "NOT",
          "author": "Qwelk",
          "name": "NOT",
          "tags": [
            "Utility",
            "Logic"
          ],
          "size": 4.0
        },
        {
          "slug": "XOR",
          "author": "Qwelk",
          "name": "XOR",
          "tags": [
            "Utility",
            "Logic"
          ],
          "size": 2.0
        },
        {
          "slug": "Mix",
          "author": "Qwelk",
          "name": "Mix",
          "tags": [
            "Utility",
            "Mixer",
            "Amplifier/VCA"
          ],
          "size": 4.0
        },
        {
          "slug": "NEWS",
          "author": "Qwelk",
          "name": "NEWS",
          "tags": [
            "Sequencer"
          ],
          "size": 9.0
        },
        {
          "slug": "Scaler",
          "author": "Qwelk",
          "name": "Scaler",
          "tags": [
            "Utility"
          ],
          "size": 2.0
        },
        {
          "slug": "Wrap",
          "author": "Qwelk",
          "name": "Wrap",
          "tags": [
            "Utility"
          ],
          "size": 4.0
        },
        {
          "slug": "XFade",
          "author": "Qwelk",
          "name": "XFade",
          "tags": [
            "Utility"
          ],
          "size": 2.0
        }
      ]
    },
    {
      "slug": "RJModules",
      "website": "https://github.com/Miserlou/RJModules",
      "manual": "",
      "models": [
        {
          "slug": "Supersaw",
          "author": "RJModules",
          "name": "[GEN] Supersaw",
          "tags": [
            "LFO"
          ],
          "size": 10.000001
        },
        {
          "slug": "TwinLFO",
          "author": "RJModules",
          "name": "[GEN] TwinLFO",
          "tags": [
            "LFO"
          ],
          "size": 10.000001
        },
        {
          "slug": "Noise",
          "author": "RJModules",
          "name": "[GEN] Noise",
          "tags": [
            "LFO"
          ],
          "size": 10.000001
        },
        {
          "slug": "RangeLFO",
          "author": "RJModules",
          "name": "[GEN] RangeLFO",
          "tags": [
            "LFO"
          ],
          "size": 10.000001
        },
        {
          "slug": "BitCrush",
          "author": "RJModules",
          "name": "[FX] BitCrush",
          "tags": [
            "Distortion"
          ],
          "size": 10.000001
        },
        {
          "slug": "Widener",
          "author": "RJModules",
          "name": "[FX] Widener",
          "tags": [
            "Utility"
          ],
          "size": 10.000001
        },
        {
          "slug": "FilterDelay",
          "author": "RJModules",
          "name": "[FX] FilterDelay",
          "tags": [
            "Delay"
          ],
          "size": 10.000001
        },
        {
          "slug": "Sidechain",
          "author": "RJModules",
          "name": "[FX] Sidechain",
          "tags": [
            "Utility"
          ],
          "size": 10.000001
        },
        {
          "slug": "Stutter",
          "author": "RJModules",
          "name": "[FX] Stutter",
          "tags": [
            "Delay"
          ],
          "size": 10.000001
        },
        {
          "slug": "Filter",
          "author": "RJModules",
          "name": "[FILT] Filter",
          "tags": [
            "Utility"
          ],
          "size": 10.000001
        },
        {
          "slug": "Filters",
          "author": "RJModules",
          "name": "[FILT] Filters",
          "tags": [
            "Utility"
          ],
          "size": 8.0
        },
        {
          "slug": "Notch",
          "author": "RJModules",
          "name": "[FILT] Notch",
          "tags": [
            "Utility"
          ],
          "size": 10.000001
        },
        {
          "slug": "Integers",
          "author": "RJModules",
          "name": "[NUM] Integers",
          "tags": [
            "Utility"
          ],
          "size": 10.000001
        },
        {
          "slug": "Floats",
          "author": "RJModules",
          "name": "[NUM] Floats",
          "tags": [
            "Utility"
          ],
          "size": 10.000001
        },
        {
          "slug": "Randoms",
          "author": "RJModules",
          "name": "[NUM] Randoms",
          "tags": [
            "Utility"
          ],
          "size": 10.000001
        },
        {
          "slug": "LRMixer",
          "author": "RJModules",
          "name": "[MIX] LRMixer",
          "tags": [
            "Utility"
          ],
          "size": 10.000001
        },
        {
          "slug": "Mono",
          "author": "RJModules",
          "name": "[MIX] Mono",
          "tags": [
            "Utility"
          ],
          "size": 10.000001
        },
        {
          "slug": "Volumes",
          "author": "RJModules",
          "name": "[MIX] Volumes",
          "tags": [
            "Utility"
          ],
          "size": 8.0
        },
        {
          "slug": "Panner",
          "author": "RJModules",
          "name": "[MIX] Panner",
          "tags": [
            "Utility"
          ],
          "size": 10.000001
        },
        {
          "slug": "Panners",
          "author": "RJModules",
          "name": "[MIX] Panners",
          "tags": [
            "Utility"
          ],
          "size": 8.0
        },
        {
          "slug": "BPM",
          "author": "RJModules",
          "name": "[LIVE] BPM",
          "tags": [
            "Utility"
          ],
          "size": 10.000001
        },
        {
          "slug": "Button",
          "author": "RJModules",
          "name": "[LIVE] Button",
          "tags": [
            "Utility"
          ],
          "size": 10.000001
        },
        {
          "slug": "Buttons",
          "author": "RJModules",
          "name": "[LIVE] Buttons",
          "tags": [
            "Utility"
          ],
          "size": 10.000001
        },
        {
          "slug": "Splitter",
          "author": "RJModules",
          "name": "[UTIL] Splitter",
          "tags": [
            "Utility"
          ],
          "size": 10.000001
        },
        {
          "slug": "Splitters",
          "author": "RJModules",
          "name": "[UTIL] Splitters",
          "tags": [
            "Utility"
          ],
          "size": 10.000001
        },
        {
          "slug": "Displays",
          "author": "RJModules",
          "name": "[UTIL] Displays",
          "tags": [
            "Utility"
          ],
          "size": 10.000001
        },
        {
          "slug": "Range",
          "author": "RJModules",
          "name": "[UTIL] Range",
          "tags": [
            "Utility"
          ],
          "size": 10.000001
        }
      ]
    },
    {
      "slug": "RODENTMODULES",
      "website": "",
      "manual": "",
      "models": [
        {
          "slug": "MessedUpOsc",
          "author": "RODENTMODULES",
          "name": "Messed Up Oscillator",
          "tags": [
            "Oscillator/VCO"
          ],
          "size": 14.000001
        }
      ]
    },
    {
      "slug": "SerialRacker",
      "website": "",
      "manual": "",
      "models": [
        {
          "slug": "MidiMultiplexer",
          "author": "SerialRacker",
          "name": "Midi Multiplexer",
          "tags": [
            "Utility"
          ],
          "size": 10.000001
        }
      ]
    },
    {
      "slug": "SonusModular",
      "website": "https://sonusmodular.sonusdept.com",
      "manual": "https://gitlab.com/sonusdept/sonusmodular#sonus-modular",
      "models": [
        {
          "slug": "Addiction",
          "author": "Sonus Modular",
          "name": "Addiction | Additive Oscillator",
          "tags": [
            "Oscillator/VCO"
          ],
          "size": 24.0000019
        },
        {
          "slug": "Bitter",
          "author": "Sonus Modular",
          "name": "Bitter | Bit Manipulator",
          "tags": [
            "Distortion",
            "Effect"
          ],
          "size": 8.0
        },
        {
          "slug": "Bymidside",
          "author": "Sonus Modular",
          "name": "Bymidside | MS Encoder",
          "tags": [
            "Dynamics",
            "Utility"
          ],
          "size": 6.00000048
        },
        {
          "slug": "Campione",
          "author": "Sonus Modular",
          "name": "Campione | Live Sampler",
          "tags": [
            "Sampler"
          ],
          "size": 12.000001
        },
        {
          "slug": "Chainsaw",
          "author": "Sonus Modular",
          "name": "Chainsaw | Fat Sawish Osc",
          "tags": [
            "Oscillator/VCO"
          ],
          "size": 12.000001
        },
        {
          "slug": "Ctrl",
          "author": "Sonus Modular",
          "name": "Ctrl | Customizable Controller",
          "tags": [
            "Controller",
            "Utility"
          ],
          "size": 16.0
        },
        {
          "slug": "Deathcrush",
          "author": "Sonus Modular",
          "name": "Deathcrush | Driver and Crusher",
          "tags": [
            "Distortion",
            "Effect"
          ],
          "size": 6.00000048
        },
        {
          "slug": "Harmony",
          "author": "Sonus Modular",
          "name": "Harmony | Chord Tool",
          "tags": [
            "Tuner",
            "Utility"
          ],
          "size": 12.000001
        },
        {
          "slug": "Ladrone",
          "author": "Sonus Modular",
          "name": "Ladrone | Drone Oscillator",
          "tags": [
            "Oscillator/VCO"
          ],
          "size": 24.0000019
        },
        {
          "slug": "Luppolo",
          "author": "Sonus Modular",
          "name": "Luppolo | Simple Looper",
          "tags": [
            "Sampler"
          ],
          "size": 6.00000048
        },
        {
          "slug": "Luppolo3",
          "author": "Sonus Modular",
          "name": "Luppolo3 | Loop Station",
          "tags": [
            "Sampler"
          ],
          "size": 30.0000019
        },
        {
          "slug": "Micromacro",
          "author": "Sonus Modular",
          "name": "Micromacro | Pitch Quantized Sequencer",
          "tags": [
            "Sequencer"
          ],
          "size": 54.0000038
        },
        {
          "slug": "Multimulti",
          "author": "Sonus Modular",
          "name": "Multimulti | 2x8 Multiples",
          "tags": [
            "Multiple",
            "Utility"
          ],
          "size": 8.0
        },
        {
          "slug": "Oktagon",
          "author": "Sonus Modular",
          "name": "Oktagon | Quad-Quad LFO/OSC",
          "tags": [
            "LFO",
            "Quad",
            "Oscillator/VCO"
          ],
          "size": 8.0
        },
        {
          "slug": "Osculum",
          "author": "Sonus Modular",
          "name": "Osculum | Unusual Oscillator",
          "tags": [
            "Oscillator/VCO"
          ],
          "size": 6.00000048
        },
        {
          "slug": "Paramath",
          "author": "Sonus Modular",
          "name": "Paramath | Comparing and Maths",
          "tags": [
            "Logic",
            "Utility"
          ],
          "size": 6.00000048
        },
        {
          "slug": "Piconoise",
          "author": "Sonus Modular",
          "name": "Piconoise | Noise Generator",
          "tags": [
            "Noise"
          ],
          "size": 4.0
        },
        {
          "slug": "Pusher",
          "author": "Sonus Modular",
          "name": "Pusher | Buttons Controller",
          "tags": [
            "Controller",
            "Utility"
          ],
          "size": 8.0
        },
        {
          "slug": "Ringo",
          "author": "Sonus Modular",
          "name": "Ringo | Ring Modulator",
          "tags": [
            "Ring Modulator",
            "Effect"
          ],
          "size": 6.00000048
        },
        {
          "slug": "Scramblase",
          "author": "Sonus Modular",
          "name": "Scramblase | Waveshaper",
          "tags": [
            "Waveshaper",
            "Effect"
          ],
          "size": 8.0
        },
        {
          "slug": "Twoff",
          "author": "Sonus Modular",
          "name": "Twoff | CV Offset",
          "tags": [
            "Utility"
          ],
          "size": 4.0
        },
        {
          "slug": "Yabp",
          "author": "Sonus Modular",
          "name": "Yabp | Blank Panel",
          "tags": [
            "Blank"
          ],
          "size": 10.000001
        }
      ]
    },
    {
      "slug": "Southpole",
      "website": "https://github.com/gbrandt1/southpole-vcvrack",
      "manual": "https://github.com/gbrandt1/southpole-vcvrack/blob/master/README.md",
      "models": [
        {
          "slug": "Abr",
          "author": "Southpole",
          "name": "Abr - A/B switch",
          "tags": [
            "Switch",
            "Mixer"
          ],
          "size": 6.00000048
        },
        {
          "slug": "Annuli",
          "author": "Southpole",
          "name": "Annuli - resonator",
          "tags": [
            "Synth Voice",
            "Oscillator/VCO"
          ],
          "size": 6.00000048
        },
        {
          "slug": "Aux",
          "author": "Southpole",
          "name": "Aux - effect loop",
          "tags": [
            "Amplifier/VCA",
            "Mixer"
          ],
          "size": 4.0
        },
        {
          "slug": "Balaclava",
          "author": "Southpole",
          "name": "Balaclava - quad VCA",
          "tags": [
            "Amplifier/VCA",
            "Mixer",
            "Attenuator"
          ],
          "size": 4.0
        },
        {
          "slug": "Bandana",
          "author": "Southpole",
          "name": "Bandana - quad polarizer",
          "tags": [
            "Amplifier/VCA",
            "Mixer",
            "Attenuator"
          ],
          "size": 4.0
        },
        {
          "slug": "Blank1HP",
          "author": "Southpole",
          "name": "Blank 1 HP",
          "tags": [
            "Blank"
          ],
          "size": 1.0
        },
        {
          "slug": "Blank2HP",
          "author": "Southpole",
          "name": "Blank 2 HP",
          "tags": [
            "Blank"
          ],
          "size": 2.0
        },
        {
          "slug": "Blank4HP",
          "author": "Southpole",
          "name": "Blank 4 HP",
          "tags": [
            "Blank"
          ],
          "size": 4.0
        },
        {
          "slug": "Blank8HP",
          "author": "Southpole",
          "name": "Blank 8 HP",
          "tags": [
            "Blank"
          ],
          "size": 8.0
        },
        {
          "slug": "Blank16HP",
          "author": "Southpole",
          "name": "Blank 16 HP",
          "tags": [
            "Blank"
          ],
          "size": 16.0
        },
        {
          "slug": "Blank42HP",
          "author": "Southpole",
          "name": "Blank 42 HP",
          "tags": [
            "Blank"
          ],
          "size": 42.0000038
        },
        {
          "slug": "But",
          "author": "Southpole",
          "name": "But - A/B buss",
          "tags": [
            "Switch",
            "Mixer"
          ],
          "size": 6.00000048
        },
        {
          "slug": "CornrowsX",
          "author": "Southpole",
          "name": "CornrowsX - macro osc",
          "tags": [
            "Oscillator/VCO",
            "Waveshaper"
          ],
          "size": 8.0
        },
        {
          "slug": "DeuxEtageres",
          "author": "Southpole",
          "name": "Deux Etageres - Stereo EQ",
          "tags": [
            "Filter/VCF"
          ],
          "size": 6.00000048
        },
        {
          "slug": "Etagere",
          "author": "Southpole",
          "name": "Etagere - EQ",
          "tags": [
            "Filter/VCF"
          ],
          "size": 6.00000048
        },
        {
          "slug": "Falls",
          "author": "Southpole",
          "name": "Falls - attenumixverter",
          "tags": [
            "Amplifier/VCA",
            "Mixer",
            "Attenuator"
          ],
          "size": 4.0
        },
        {
          "slug": "Ftagn",
          "author": "Southpole",
          "name": "Ftagn - no filter",
          "tags": [
            "Filter/VCF"
          ],
          "size": 4.0
        },
        {
          "slug": "Fuse",
          "author": "Southpole",
          "name": "Fuse - next pattern",
          "tags": [
            "Sequencer"
          ],
          "size": 4.0
        },
        {
          "slug": "Gnome",
          "author": "Southpole",
          "name": "Gnome - synth voice",
          "tags": [
            "Synth Voice",
            "Oscillator/VCO",
            "LFO",
            "Envelope Generator",
            "Filter/VCF",
            "Amplifier/VCA",
            "Mixer"
          ],
          "size": 10.000001
        },
        {
          "slug": "Piste",
          "author": "Southpole",
          "name": "Piste - drum processor",
          "tags": [
            "Envelope Generator",
            "Effect"
          ],
          "size": 4.0
        },
        {
          "slug": "Pulse",
          "author": "Southpole",
          "name": "Pulse - pulse generator",
          "tags": [
            "Envelope Generator"
          ],
          "size": 4.0
        },
        {
          "slug": "Rakes",
          "author": "Southpole",
          "name": "Rakes - resonator bank",
          "tags": [
            "Filter/VCF"
          ],
          "size": 8.0
        },
        {
          "slug": "Riemann",
          "author": "Southpole",
          "name": "Riemann - chord generator",
          "tags": [
            "Sequencer"
          ],
          "size": 16.0
        },
        {
          "slug": "Smoke",
          "author": "Southpole",
          "name": "Smoke - texture synth",
          "tags": [
            "Granular",
            "Reverb"
          ],
          "size": 6.00000048
        },
        {
          "slug": "Snake",
          "author": "Southpole",
          "name": "Snake - multicore",
          "tags": [
            "Utility"
          ],
          "size": 4.0
        },
        {
          "slug": "SNS",
          "author": "Southpole",
          "name": "SNS - euclidean sequencer",
          "tags": [
            "Sequencer"
          ],
          "size": 6.00000048
        },
        {
          "slug": "Splash",
          "author": "Southpole",
          "name": "Splash / Lambs - tidal modulator",
          "tags": [
            "LFO",
            "Oscillator/VCO",
            "Waveshaper",
            "Function Generator"
          ],
          "size": 8.0
        },
        {
          "slug": "Sssh",
          "author": "Southpole",
          "name": "Sssh - noise and S+H",
          "tags": [
            "Noise",
            "Sample and Hold"
          ],
          "size": 4.0
        },
        {
          "slug": "Wriggle",
          "author": "Southpole",
          "name": "Wriggle - spring model",
          "tags": [
            "LFO",
            "Function Generator"
          ],
          "size": 2.0
        }
      ]
    },
    {
      "slug": "SubmarineFree",
      "website": "",
      "manual": "",
      "models": [
        {
          "slug": "AG-106",
          "author": "SubmarineFree",
          "name": "AG-106 AND Gates",
          "tags": [
            "Logic",
            "Multiple"
          ],
          "size": 6.00000048
        },
        {
          "slug": "BB-120",
          "author": "SubmarineFree",
          "name": "BB-120 20-Stage Bucket Brigade Sample and Hold",
          "tags": [
            "Logic",
            "Delay",
            "Sample and Hold",
            "Multiple"
          ],
          "size": 4.0
        },
        {
          "slug": "FF-110",
          "author": "SubmarineFree",
          "name": "FF-110 10-Stage Flip-Flop Counter",
          "tags": [
            "Logic",
            "Multiple"
          ],
          "size": 2.0
        },
        {
          "slug": "FF-120",
          "author": "SubmarineFree",
          "name": "FF-120 20-Stage Flip-Flop Counter",
          "tags": [
            "Logic",
            "Multiple"
          ],
          "size": 4.0
        },
        {
          "slug": "FF-212",
          "author": "SubmarineFree",
          "name": "FF-212 Edge Triggered Flip-Flops",
          "tags": [
            "Logic",
            "Multiple"
          ],
          "size": 6.00000048
        },
        {
          "slug": "LA-108",
          "author": "SubmarineFree",
          "name": "LA-108 Logic Analyser",
          "tags": [
            "Logic",
            "Visual"
          ],
          "size": 20.0000019
        },
        {
          "slug": "LD-106",
          "author": "SubmarineFree",
          "name": "LD-106 Schmitt Trigger Line Drivers",
          "tags": [
            "Logic",
            "Multiple"
          ],
          "size": 6.00000048
        },
        {
          "slug": "NG-112",
          "author": "SubmarineFree",
          "name": "NG-112 NOT Gates",
          "tags": [
            "Logic",
            "Multiple"
          ],
          "size": 6.00000048
        },
        {
          "slug": "OG-106",
          "author": "SubmarineFree",
          "name": "OG-106 OR Gates",
          "tags": [
            "Logic",
            "Multiple"
          ],
          "size": 6.00000048
        },
        {
          "slug": "PG-112",
          "author": "SubmarineFree",
          "name": "PG-112 Pulse Generators",
          "tags": [
            "Logic",
            "Multiple"
          ],
          "size": 8.0
        },
        {
          "slug": "PO-101",
          "author": "SubmarineFree",
          "name": "PO-101 Phased VCO",
          "tags": [
            "Oscillator/VCO",
            "Multiple",
            "Digital"
          ],
          "size": 12.000001
        },
        {
          "slug": "PO-102",
          "author": "SubmarineFree",
          "name": "PO-102 Phased LFO",
          "tags": [
            "Oscillator/VCO",
            "Multiple",
            "Digital"
          ],
          "size": 12.000001
        },
        {
          "slug": "PO-204",
          "author": "SubmarineFree",
          "name": "PO-204 Phase Modulation Engine",
          "tags": [
            "Oscillator/VCO",
            "Quad",
            "Digital"
          ],
          "size": 10.000001
        },
        {
          "slug": "WK-101",
          "author": "SubmarineFree",
          "name": "WK-101 Das Wohltemperierte Klavier",
          "tags": [
            "Quantizer",
            "Tuner"
          ],
          "size": 10.000001
        },
        {
          "slug": "WK-205",
          "author": "SubmarineFree",
          "name": "WK-205 Das Wohltemperierte Klavier Nano",
          "tags": [
            "Quantizer",
            "Tuner",
            "Multiple"
          ],
          "size": 2.0
        },
        {
          "slug": "XF-101",
          "author": "SubmarineFree",
          "name": "XF-101 Single Mono Cross Fader",
          "tags": [
            "Mixer"
          ],
          "size": 12.000001
        },
        {
          "slug": "XF-102",
          "author": "SubmarineFree",
          "name": "XF-102 Dual Mono Cross Fader",
          "tags": [
            "Mixer",
            "Dual/Stereo"
          ],
          "size": 12.000001
        },
        {
          "slug": "XF-104",
          "author": "SubmarineFree",
          "name": "XF-104 Quad Mono Cross Fader",
          "tags": [
            "Mixer",
            "Quad"
          ],
          "size": 12.000001
        },
        {
          "slug": "XF-201",
          "author": "SubmarineFree",
          "name": "XF-201 Single Stereo Cross Fader",
          "tags": [
            "Mixer"
          ],
          "size": 8.0
        },
        {
          "slug": "XF-202",
          "author": "SubmarineFree",
          "name": "XF-202 Dual Stereo Cross Fader",
          "tags": [
            "Mixer",
            "Dual/Stereo"
          ],
          "size": 8.0
        },
        {
          "slug": "XG-106",
          "author": "SubmarineFree",
          "name": "XG-106 XOR Gates",
          "tags": [
            "Logic",
            "Multiple"
          ],
          "size": 6.00000048
        },
        {
          "slug": "BP-101",
          "author": "SubmarineFree",
          "name": "BP-101 Blanking Plate",
          "tags": [
            "Blank"
          ],
          "size": 1.0
        },
        {
          "slug": "BP-102",
          "author": "SubmarineFree",
          "name": "BP-102 Blanking Plate",
          "tags": [
            "Blank"
          ],
          "size": 2.0
        },
        {
          "slug": "BP-104",
          "author": "SubmarineFree",
          "name": "BP-104 Blanking Plate",
          "tags": [
            "Blank"
          ],
          "size": 4.0
        },
        {
          "slug": "BP-108",
          "author": "SubmarineFree",
          "name": "BP-108 Blanking Plate",
          "tags": [
            "Blank"
          ],
          "size": 8.0
        },
        {
          "slug": "BP-110",
          "author": "SubmarineFree",
          "name": "BP-110 Blanking Plate",
          "tags": [
            "Blank"
          ],
          "size": 10.000001
        },
        {
          "slug": "BP-112",
          "author": "SubmarineFree",
          "name": "BP-112 Blanking Plate",
          "tags": [
            "Blank"
          ],
          "size": 12.000001
        },
        {
          "slug": "BP-116",
          "author": "SubmarineFree",
          "name": "BP-116 Blanking Plate",
          "tags": [
            "Blank"
          ],
          "size": 16.0
        },
        {
          "slug": "BP-120",
          "author": "SubmarineFree",
          "name": "BP-120 Blanking Plate",
          "tags": [
            "Blank"
          ],
          "size": 20.0000019
        },
        {
          "slug": "BP-124",
          "author": "SubmarineFree",
          "name": "BP-124 Blanking Plate",
          "tags": [
            "Blank"
          ],
          "size": 24.0000019
        },
        {
          "slug": "BP-132",
          "author": "SubmarineFree",
          "name": "BP-132 Blanking Plate",
          "tags": [
            "Blank"
          ],
          "size": 32.0
        }
      ]
    },
    {
      "slug": "SubmarinePrototype",
      "website": "",
      "manual": "",
      "models": [
        {
          "slug": "CrossFader",
          "author": "SubmarinePrototype",
          "name": "Cross Fader",
          "tags": [
            "Attenuator",
            "Mixer"
          ],
          "size": 10.000001
        },
        {
          "slug": "WTC_Nano",
          "author": "SubmarinePrototype",
          "name": "Das Wohltemperierte Klavier",
          "tags": [
            "Tuner"
          ],
          "size": 3.00000024
        }
      ]
    },
    {
      "slug": "SynthKit",
      "website": "https://github.com/JerrySievert/SynthKit",
      "manual": "https://github.com/JerrySievert/SynthKit/blob/master/README.md",
      "models": [
        {
          "slug": "Addition",
          "author": "SynthKit",
          "name": "Addition",
          "tags": [
            "Mixer"
          ],
          "size": 3.00000024
        },
        {
          "slug": "Subtraction",
          "author": "SynthKit",
          "name": "Subtraction",
          "tags": [
            "Mixer"
          ],
          "size": 3.00000024
        },
        {
          "slug": "And",
          "author": "SynthKit",
          "name": "And",
          "tags": [
            "Mixer"
          ],
          "size": 3.00000024
        },
        {
          "slug": "Or",
          "author": "SynthKit",
          "name": "Or",
          "tags": [
            "Mixer"
          ],
          "size": 3.00000024
        },
        {
          "slug": "1x8 Splitter",
          "author": "SynthKit",
          "name": "1x8 Splitter",
          "tags": [
            "Mixer"
          ],
          "size": 3.00000024
        },
        {
          "slug": "1x8 Splitter (CV)",
          "author": "SynthKit",
          "name": "1x8 Splitter (CV)",
          "tags": [
            "Mixer"
          ],
          "size": 4.0
        },
        {
          "slug": "Clock Divider",
          "author": "SynthKit",
          "name": "Clock Divider",
          "tags": [
            "Utility",
            "Clock"
          ],
          "size": 3.00000024
        },
        {
          "slug": "Rotating Clock Divider",
          "author": "SynthKit",
          "name": "Rotating Clock Divider",
          "tags": [
            "Utility",
            "Clock"
          ],
          "size": 4.0
        },
        {
          "slug": "Shifting Clock Divider CV",
          "author": "SynthKit",
          "name": "Shifting Clock Divider CV",
          "tags": [
            "Utility",
            "Clock"
          ],
          "size": 4.0
        },
        {
          "slug": "Prime Clock Divider",
          "author": "SynthKit",
          "name": "Prime Clock Divider",
          "tags": [
            "Utility",
            "Clock"
          ],
          "size": 3.00000024
        },
        {
          "slug": "Fibonacci Clock Divider",
          "author": "SynthKit",
          "name": "Fibonacci Clock Divider",
          "tags": [
            "Utility",
            "Clock"
          ],
          "size": 3.00000024
        },
        {
          "slug": "4-Step Sequencer",
          "author": "SynthKit",
          "name": "4-Step Sequencer",
          "tags": [
            "Sequencer"
          ],
          "size": 3.00000024
        },
        {
          "slug": "8-Step Sequencer",
          "author": "SynthKit",
          "name": "8-Step Sequencer",
          "tags": [
            "Sequencer"
          ],
          "size": 5.00000048
        },
        {
          "slug": "DevKit",
          "author": "SynthKit",
          "name": "DevKit",
          "tags": [
            "Utility"
          ],
          "size": 5.00000048
        },
        {
          "slug": "Mixer 4",
          "author": "SynthKit",
          "name": "Mixer 4",
          "tags": [
            "Mixer"
          ],
          "size": 20.0000019
        }
      ]
    },
    {
      "slug": "TheXOR",
      "website": "https://github.com/The-XOR/VCV-Sequencers",
      "manual": "https://github.com/The-XOR/VCV-Sequencers/blob/master/README.md",
      "models": [
        {
          "slug": "Klee",
          "author": "TheXOR",
          "name": "Klee Sequencer",
          "tags": [
            "Sequencer"
          ],
          "size": 48.0000038
        },
        {
          "slug": "M581",
          "author": "TheXOR",
          "name": "581 Sequencer",
          "tags": [
            "Sequencer"
          ],
          "size": 29.0000019
        },
        {
          "slug": "Z8K",
          "author": "TheXOR",
          "name": "Z8K Sequencer",
          "tags": [
            "Sequencer"
          ],
          "size": 34.0
        },
        {
          "slug": "Renato",
          "author": "TheXOR",
          "name": "Renato Sequencer",
          "tags": [
            "Sequencer"
          ],
          "size": 39.0000038
        },
        {
          "slug": "Spiralone",
          "author": "TheXOR",
          "name": "Spiralone Sequencer",
          "tags": [
            "Sequencer"
          ],
          "size": 51.0000038
        },
        {
          "slug": "Burst",
          "author": "TheXOR",
          "name": "Burst",
          "tags": [
            "Sequencer"
          ],
          "size": 16.0
        },
        {
          "slug": "Uncertain",
          "author": "TheXOR",
          "name": "Uncertain",
          "tags": [
            "Random"
          ],
          "size": 12.000001
        },
        {
          "slug": "PWMClock",
          "author": "TheXOR",
          "name": "PWM Clock",
          "tags": [
            "Clock"
          ],
          "size": 15.000001
        },
        {
          "slug": "Quantizer",
          "author": "TheXOR",
          "name": "Quantizer",
          "tags": [
            "Quantizer"
          ],
          "size": 10.000001
        },
        {
          "slug": "Attenuator",
          "author": "TheXOR",
          "name": "Attenuator",
          "tags": [
            "Attenuator"
          ],
          "size": 8.0
        },
        {
          "slug": "Boole",
          "author": "TheXOR",
          "name": "Boole",
          "tags": [
            "Logic"
          ],
          "size": 14.000001
        },
        {
          "slug": "Switch",
          "author": "TheXOR",
          "name": "Switch",
          "tags": [
            "Switch"
          ],
          "size": 10.000001
        },
        {
          "slug": "Mplex",
          "author": "TheXOR",
          "name": "Mplex",
          "tags": [
            "Switch"
          ],
          "size": 10.000001
        }
      ]
    },
    {
      "slug": "Valley",
      "website": "https://github.com/ValleyAudio/ValleyRackFree",
      "manual": "https://github.com/ValleyAudio/ValleyRackFree/blob/master/README.md",
      "models": [
        {
          "slug": "Topograph",
          "author": "Valley",
          "name": "Topograph",
          "tags": [
            "Sequencer"
          ],
          "size": 16.0
        },
        {
          "slug": "uGraph",
          "author": "Valley",
          "name": "uGraph",
          "tags": [
            "Sequencer"
          ],
          "size": 10.000001
        },
        {
          "slug": "Dexter",
          "author": "Valley",
          "name": "Dexter",
          "tags": [
            "Oscillator/VCO"
          ],
          "size": 46.0000038
        },
        {
          "slug": "Plateau",
          "author": "Valley",
          "name": "Plateau",
          "tags": [
            "Reverb"
          ],
          "size": 12.000001
        }
      ]
    },
    {
      "slug": "alto777_LFSR",
      "website": "https://github.com/alto777/LFSR",
      "manual": "https://github.com/alto777/LFSR/README.md",
      "models": [
        {
          "slug": "FG8",
          "author": "alto777_LFSR",
          "name": "FG-8",
          "tags": [
            "Sequencer"
          ],
          "size": 22.0000019
        },
        {
          "slug": "Psychtone",
          "author": "alto777_LFSR",
          "name": "Psych tone",
          "tags": [
            "Sequencer"
          ],
          "size": 25.0000019
        },
        {
          "slug": "Amuse",
          "author": "alto777_LFSR",
          "name": "Amuse",
          "tags": [
            "Sequencer"
          ],
          "size": 15.000001
        },
        {
          "slug": "a7Utility",
          "author": "alto777_LFSR",
          "name": "a7Utility VIS",
          "tags": [
            "Utility"
          ],
          "size": 9.0
        },
        {
          "slug": "cheapFX",
          "author": "alto777_LFSR",
          "name": "Cheap F/X",
          "tags": [
            "LFO"
          ],
          "size": 7.00000048
        },
        {
          "slug": "Divada",
          "author": "alto777_LFSR",
          "name": "Divada VIS",
          "tags": [
            "Oscillator/VCO"
          ],
          "size": 6.00000048
        },
        {
          "slug": "YASeq3",
          "author": "alto777_LFSR",
          "name": "Yet Another SEQ3",
          "tags": [
            "Sequencer"
          ],
          "size": 26.0000019
        }
      ]
    },
    {
      "slug": "cf",
      "website": "https://github.com/cfoulc/cf",
      "manual": "https://github.com/cfoulc/cf/blob/master/README.md",
      "models": [
        {
          "slug": "trSEQ",
          "author": "cf",
          "name": "trSEQ",
          "tags": [
            "Sequencer"
          ],
          "size": 22.0000019
        },
        {
          "slug": "LEDSEQ",
          "author": "cf",
          "name": "Ledseq",
          "tags": [
            "Sequencer"
          ],
          "size": 6.00000048
        },
        {
          "slug": "L3DS3Q",
          "author": "cf",
          "name": "L3ds3q",
          "tags": [
            "Sequencer"
          ],
          "size": 6.00000048
        },
        {
          "slug": "SLIDERSEQ",
          "author": "cf",
          "name": "Sliderseq",
          "tags": [
            "Sequencer"
          ],
          "size": 9.0
        },
        {
          "slug": "PLAYER",
          "author": "cf",
          "name": "Player",
          "tags": [
            "Sampler"
          ],
          "size": 9.0
        },
        {
          "slug": "STEPS",
          "author": "cf",
          "name": "Steps",
          "tags": [
            "Utility"
          ],
          "size": 6.00000048
        },
        {
          "slug": "METRO",
          "author": "cf",
          "name": "Metro",
          "tags": [
            "Clock"
          ],
          "size": 6.00000048
        },
        {
          "slug": "EACH",
          "author": "cf",
          "name": "Each",
          "tags": [
            "Clock"
          ],
          "size": 6.00000048
        },
        {
          "slug": "FOUR",
          "author": "cf",
          "name": "Four",
          "tags": [
            "Utility"
          ],
          "size": 9.0
        },
        {
          "slug": "PEAK",
          "author": "cf",
          "name": "Peak",
          "tags": [
            "Limiter"
          ],
          "size": 6.00000048
        },
        {
          "slug": "MONO",
          "author": "cf",
          "name": "Mono",
          "tags": [
            "Mixer"
          ],
          "size": 6.00000048
        },
        {
          "slug": "STEREO",
          "author": "cf",
          "name": "Stereo",
          "tags": [
            "Mixer"
          ],
          "size": 6.00000048
        },
        {
          "slug": "MASTER",
          "author": "cf",
          "name": "Master",
          "tags": [
            "Mixer"
          ],
          "size": 6.00000048
        },
        {
          "slug": "SUB",
          "author": "cf",
          "name": "Sub",
          "tags": [
            "Mixer"
          ],
          "size": 6.00000048
        },
        {
          "slug": "CUBE",
          "author": "cf",
          "name": "Cube",
          "tags": [
            "LFO"
          ],
          "size": 8.0
        },
        {
          "slug": "PATCH",
          "author": "cf",
          "name": "Patch",
          "tags": [
            "Utility"
          ],
          "size": 9.0
        },
        {
          "slug": "LEDS",
          "author": "cf",
          "name": "Leds",
          "tags": [
            "Visual"
          ],
          "size": 6.00000048
        },
        {
          "slug": "DAVE",
          "author": "cf",
          "name": "Dave",
          "tags": [
            "Blank"
          ],
          "size": 8.0
        }
      ]
    },
    {
      "slug": "com-soundchasing-stochasm",
      "website": "https://soundchasing.com/uncertainty",
      "manual": "https://soundchasing.com/stochasm",
      "models": [
        {
          "slug": "Resonator",
          "author": "Stochasm",
          "name": "Bitstream Resonator",
          "tags": [
            "Oscillator/VCO"
          ],
          "size": 8.0
        }
      ]
    },
    {
      "slug": "dBiz",
      "website": "",
      "manual": "",
      "models": [
        {
          "slug": "Blank",
          "author": "dBiz",
          "name": "Blank",
          "tags": [
            "Blank"
          ],
          "size": 6.00000048
        },
        {
          "slug": "Multiple",
          "author": "dBiz",
          "name": "Multiple",
          "tags": [
            "Multiple"
          ],
          "size": 2.0
        },
        {
          "slug": "Contorno",
          "author": "dBiz",
          "name": "Contorno",
          "tags": [
            "Envelope Generator"
          ],
          "size": 17.0
        },
        {
          "slug": "Chord",
          "author": "dBiz",
          "name": "Chord",
          "tags": [
            "Quantizer"
          ],
          "size": 9.0
        },
        {
          "slug": "Utility",
          "author": "dBiz",
          "name": "Utility",
          "tags": [
            "Quantizer"
          ],
          "size": 8.0
        },
        {
          "slug": "Transpose",
          "author": "dBiz",
          "name": "Transpose",
          "tags": [
            "Quantizer"
          ],
          "size": 4.0
        },
        {
          "slug": "Bene",
          "author": "dBiz",
          "name": "Bene",
          "tags": [
            "Sequencer"
          ],
          "size": 13.000001
        },
        {
          "slug": "Bene2",
          "author": "dBiz",
          "name": "Bene2",
          "tags": [
            "Sequencer"
          ],
          "size": 20.0000019
        },
        {
          "slug": "BenePads",
          "author": "dBiz",
          "name": "BenePads",
          "tags": [
            "Utility"
          ],
          "size": 11.000001
        },
        {
          "slug": "SubMix",
          "author": "dBiz",
          "name": "SubMix",
          "tags": [
            "Mixer"
          ],
          "size": 12.000001
        },
        {
          "slug": "Remix",
          "author": "dBiz",
          "name": "Remix",
          "tags": [
            "Mixer"
          ],
          "size": 14.000001
        },
        {
          "slug": "PerfMixer",
          "author": "dBiz",
          "name": "PerfMixer",
          "tags": [
            "Mixer"
          ],
          "size": 25.0000019
        },
        {
          "slug": "VCA4",
          "author": "dBiz",
          "name": "VCA4",
          "tags": [
            "Utility"
          ],
          "size": 20.0000019
        },
        {
          "slug": "VCA530",
          "author": "dBiz",
          "name": "VCA530",
          "tags": [
            "Mixer"
          ],
          "size": 12.000001
        },
        {
          "slug": "SmiX",
          "author": "dBiz",
          "name": "SmiX",
          "tags": [
            "Mixer"
          ],
          "size": 16.0
        },
        {
          "slug": "Verbo",
          "author": "dBiz",
          "name": "Verbo",
          "tags": [
            "Oscillator/VCO"
          ],
          "size": 25.0000019
        },
        {
          "slug": "DVCO",
          "author": "dBiz",
          "name": "DVCO",
          "tags": [
            "Oscillator/VCO"
          ],
          "size": 13.000001
        },
        {
          "slug": "DAOSC",
          "author": "dBiz",
          "name": "DAOSC",
          "tags": [
            "Oscillator/VCO"
          ],
          "size": 13.000001
        },
        {
          "slug": "TROSC",
          "author": "dBiz",
          "name": "Triple Oscillator",
          "tags": [
            "Oscillator/VCO"
          ],
          "size": 22.0000019
        },
        {
          "slug": "DualFilter",
          "author": "dBiz",
          "name": "Dual Multimode Filter",
          "tags": [
            "Filter/VCF"
          ],
          "size": 16.0
        }
      ]
    },
    {
      "slug": "luckyxxl",
      "website": "",
      "manual": "",
      "models": [
        {
          "slug": "Distribute2",
          "author": "luckyxxl",
          "name": "Distribute2",
          "tags": [
            "Multiple"
          ],
          "size": 7.00000048
        },
        {
          "slug": "Distribute",
          "author": "luckyxxl",
          "name": "Distribute4",
          "tags": [
            "Multiple"
          ],
          "size": 7.00000048
        },
        {
          "slug": "Quantize",
          "author": "luckyxxl",
          "name": "Quantize",
          "tags": [
            "Quantizer"
          ],
          "size": 6.00000048
        },
        {
          "slug": "Tick",
          "author": "luckyxxl",
          "name": "Tick",
          "tags": [
            "Clock"
          ],
          "size": 6.00000048
        }
      ]
    },
    {
      "slug": "mental",
      "website": "https://github.com/Strum/Strums_Mental_VCV_Modules",
      "manual": "https://github.com/Strum/Strums_Mental_VCV_Modules/wiki/Mental-Modules-WIKI",
      "models": [
        {
          "slug": "MentalSubMixer",
          "author": "mental",
          "name": "Sub Mixer",
          "tags": [
            "Mixer"
          ],
          "size": 8.0
        },
        {
          "slug": "MentalMults",
          "author": "mental",
          "name": "Mults",
          "tags": [
            "Dual/Stereo",
            "Multiple"
          ],
          "size": 2.0
        },
        {
          "slug": "MentalMixer",
          "author": "mental",
          "name": "Mixer",
          "tags": [
            "Mixer"
          ],
          "size": 26.0000019
        },
        {
          "slug": "MentalFold",
          "author": "mental",
          "name": "Wave Folder",
          "tags": [
            "Distortion"
          ],
          "size": 2.0
        },
        {
          "slug": "MentalClip",
          "author": "mental",
          "name": "Clipper",
          "tags": [
            "Distortion"
          ],
          "size": 2.0
        },
        {
          "slug": "MentalGates",
          "author": "mental",
          "name": "Gates",
          "tags": [
            "Utility"
          ],
          "size": 4.0
        },
        {
          "slug": "MentalABSwitches",
          "author": "mental",
          "name": "A/B Switches",
          "tags": [
            "Switch",
            "Utility"
          ],
          "size": 5.00000048
        },
        {
          "slug": "MentalQuantiser",
          "author": "mental",
          "name": "Quantiser",
          "tags": [
            "Quantizer"
          ],
          "size": 6.00000048
        },
        {
          "slug": "MentalChord",
          "author": "mental",
          "name": "Chord",
          "tags": [
            "Controller"
          ],
          "size": 6.00000048
        },
        {
          "slug": "MentalMuxes",
          "author": "mental",
          "name": "Multiplexers",
          "tags": [
            "Dual/Stereo",
            "Utility"
          ],
          "size": 4.0
        },
        {
          "slug": "MentalLogic",
          "author": "mental",
          "name": "Logic Gates",
          "tags": [
            "Utility"
          ],
          "size": 5.00000048
        },
        {
          "slug": "MentalButtons",
          "author": "mental",
          "name": "Buttons",
          "tags": [
            "Utility"
          ],
          "size": 4.0
        },
        {
          "slug": "MentalSums",
          "author": "mental",
          "name": "Summing Mixer",
          "tags": [
            "Mixer",
            "Utility"
          ],
          "size": 2.0
        },
        {
          "slug": "MentalPitchShift",
          "author": "mental",
          "name": "Pitch Shifter",
          "tags": [
            "Controller"
          ],
          "size": 4.0
        },
        {
          "slug": "MentalClockDivider",
          "author": "mental",
          "name": "Clock Divider",
          "tags": [
            "Utility"
          ],
          "size": 3.00000024
        },
        {
          "slug": "MentalCartesian",
          "author": "mental",
          "name": "Cartesian Sequencer",
          "tags": [
            "Sequencer"
          ],
          "size": 16.0
        },
        {
          "slug": "MentalPatchMatrix",
          "author": "mental",
          "name": "Patch Matrix",
          "tags": [
            "Utility"
          ],
          "size": 19.0000019
        },
        {
          "slug": "MentalBinaryDecoder",
          "author": "mental",
          "name": "Binary Decoder",
          "tags": [
            "Utility"
          ],
          "size": 5.00000048
        },
        {
          "slug": "MentalSwitch8",
          "author": "mental",
          "name": "8 Way Switch",
          "tags": [
            "Switch",
            "Utility"
          ],
          "size": 5.00000048
        },
        {
          "slug": "MentalMux8",
          "author": "mental",
          "name": "8 Way Multiplexer",
          "tags": [
            "Utility"
          ],
          "size": 5.00000048
        },
        {
          "slug": "MentalCounters",
          "author": "mental",
          "name": "Counters",
          "tags": [
            "Utility"
          ],
          "size": 4.0
        },
        {
          "slug": "MentalKnobs",
          "author": "mental",
          "name": "Knobs",
          "tags": [
            "Controller",
            "Utility"
          ],
          "size": 4.0
        },
        {
          "slug": "MentalGateMaker",
          "author": "mental",
          "name": "Gate Maker",
          "tags": [
            "Utility"
          ],
          "size": 8.0
        },
        {
          "slug": "MentalMasterClock",
          "author": "mental",
          "name": "Master Clock",
          "tags": [
            "Clock"
          ],
          "size": 8.0
        },
        {
          "slug": "MentalQuadLFO",
          "author": "mental",
          "name": "Quad LFO",
          "tags": [
            "LFO",
            "Quad",
            "Clock"
          ],
          "size": 8.0
        },
        {
          "slug": "MentalRadioButtons",
          "author": "mental",
          "name": "Radio Buttons",
          "tags": [
            "Controller",
            "Switch",
            "Utility"
          ],
          "size": 6.00000048
        }
      ]
    },
    {
      "slug": "moDllz",
      "website": "",
      "manual": "",
      "models": [
        {
          "slug": "MIDIPoly16",
          "author": "moDllz",
          "name": "MIDI Poly 16",
          "tags": [
            "MIDI",
            "Arpeggiator",
            "Sequencer",
            "Controller",
            "Multiple",
            "External"
          ],
          "size": 40.0000038
        },
        {
          "slug": "TwinGlider",
          "author": "moDllz",
          "name": "TwinGlider Dual Portamento",
          "tags": [
            "Slew Limiter",
            "Dual/Stereo",
            "Envelope Follower"
          ],
          "size": 11.000001
        },
        {
          "slug": "MIDIdualCV",
          "author": "moDllz",
          "name": "MIDI to dual CV interface",
          "tags": [
            "MIDI",
            "Dual/Stereo",
            "External"
          ],
          "size": 9.0
        },
        {
          "slug": "XBender",
          "author": "moDllz",
          "name": "Poly X Bender",
          "tags": [
            "Multiple",
            "Effect"
          ],
          "size": 18.0
        }
      ]
    },
    {
      "slug": "modular80",
      "website": "https://github.com/cschol/modular80",
      "manual": "https://github.com/cschol/modular80/blob/master/README.md",
      "models": [
        {
          "slug": "Logistiker",
          "author": "modular80",
          "name": "Logistiker",
          "tags": [
            "Random"
          ],
          "size": 6.00000048
        }
      ]
    },
    {
      "slug": "mscHack",
      "website": "https://github.com/mschack/VCV-Rack-Plugins",
      "manual": "",
      "models": [
        {
          "slug": "MasterClockx4",
          "author": "mscHack",
          "name": "Master CLOCK x 4",
          "tags": [
            "Clock",
            "Quad"
          ],
          "size": 18.0
        },
        {
          "slug": "Seq_3ch_16step",
          "author": "mscHack",
          "name": "SEQ 3 x 16",
          "tags": [
            "Sequencer",
            "Multiple"
          ],
          "size": 23.0000019
        },
        {
          "slug": "Seq_6ch_32step",
          "author": "mscHack",
          "name": "SEQ 6 x 32",
          "tags": [
            "Sequencer",
            "Multiple"
          ],
          "size": 41.0000038
        },
        {
          "slug": "TriadSeq2",
          "author": "mscHack",
          "name": "SEQ Triad 2",
          "tags": [
            "Sequencer",
            "Multiple"
          ],
          "size": 25.0000019
        },
        {
          "slug": "Maude221",
          "author": "mscHack",
          "name": "Maude 221 Wave Combiner",
          "tags": [
            "Waveshaper",
            "Utility",
            "Multiple"
          ],
          "size": 8.0
        },
        {
          "slug": "ARP700",
          "author": "mscHack",
          "name": "ARP 700",
          "tags": [
            "Sequencer"
          ],
          "size": 27.0000019
        },
        {
          "slug": "SynthDrums",
          "author": "mscHack",
          "name": "SYNTH Drums",
          "tags": [
            "Drum",
            "Multiple"
          ],
          "size": 11.000001
        },
        {
          "slug": "XFade",
          "author": "mscHack",
          "name": "MIXER Cross Fader 3 Channel",
          "tags": [
            "Mixer",
            "Multiple"
          ],
          "size": 8.0
        },
        {
          "slug": "Mix_1x4_Stereo",
          "author": "mscHack",
          "name": "MIXER 1x4 Stereo/Mono",
          "tags": [
            "Mixer",
            "Equalizer",
            "Panning",
            "Amplifier/VCA",
            "Multiple"
          ],
          "size": 16.0
        },
        {
          "slug": "Mix_2x4_Stereo",
          "author": "mscHack",
          "name": "MIXER 2x4 Stereo/Mono",
          "tags": [
            "Mixer",
            "Equalizer",
            "Dual/Stereo",
            "Panning",
            "Amplifier/VCA",
            "Multiple"
          ],
          "size": 27.0000019
        },
        {
          "slug": "Mix_4x4_Stereo(2)",
          "author": "mscHack",
          "name": "MIXER 4x4 Stereo/Mono",
          "tags": [
            "Mixer",
            "Equalizer",
            "Quad",
            "Panning",
            "Amplifier/VCA",
            "Multiple"
          ],
          "size": 47.0000038
        },
        {
          "slug": "Mix_24_4_4",
          "author": "mscHack",
          "name": "MIXER 24ch (In Development)",
          "tags": [
            "Mixer",
            "Equalizer",
            "Panning",
            "Amplifier/VCA",
            "Multiple"
          ],
          "size": 54.0000038
        },
        {
          "slug": "StepDelay",
          "author": "mscHack",
          "name": "DELAY 4 Step Delay",
          "tags": [
            "Delay",
            "Panning"
          ],
          "size": 14.000001
        },
        {
          "slug": "PingPong_Widget",
          "author": "mscHack",
          "name": "DELAY Ping Pong",
          "tags": [
            "Delay",
            "Panning"
          ],
          "size": 8.0
        },
        {
          "slug": "Osc_3Ch_Widget",
          "author": "mscHack",
          "name": "OSC 3 Channel",
          "tags": [
            "Synth Voice",
            "Oscillator/VCO",
            "Multiple"
          ],
          "size": 21.0000019
        },
        {
          "slug": "Compressor1",
          "author": "mscHack",
          "name": "COMP Basic Compressor",
          "tags": [
            "Dynamics"
          ],
          "size": 8.0
        }
      ]
    },
    {
      "slug": "mtsch-plugins",
      "website": "https://github.com/mtsch/mtsch-vcvrack-plugins",
      "manual": "https://github.com/mtsch/mtsch-vcvrack-plugins",
      "models": [
        {
          "slug": "Sum",
          "author": "mtsch",
          "name": "Sum",
          "tags": [
            "Utility"
          ],
          "size": 4.0
        },
        {
          "slug": "Rationals",
          "author": "mtsch",
          "name": "Rationals",
          "tags": [
            "Utility"
          ],
          "size": 10.000001
        },
        {
          "slug": "TriggerPanic",
          "author": "mtsch",
          "name": "Trigger Panic!",
          "tags": [
            "Delay"
          ],
          "size": 10.000001
        }
      ]
    },
    {
      "slug": "s-ol",
      "website": "https://github.com/s-ol/vcvmods",
      "manual": "https://github.com/s-ol/vcvmods",
      "models": [
        {
          "slug": "CircleVCO",
          "author": "s-ol",
          "name": "Circle VCO",
          "tags": [
            "Oscillator/VCO",
            "Visual"
          ],
          "size": 4.0
        },
        {
          "slug": "WrapComp",
          "author": "s-ol",
          "name": "Wrapping Comparator",
          "tags": [
            "Logic"
          ],
          "size": 6.00000048
        },
        {
          "slug": "Modulo",
          "author": "s-ol",
          "name": "Modulo",
          "tags": [
            "Logic"
          ],
          "size": 4.0
        }
      ]
    },
    {
      "slug": "squinkylabs-plug1",
      "website": "",
      "manual": "",
      "models": [
        {
          "slug": "squinkylabs-freqshifter",
          "author": "Squinky Labs",
          "name": "Booty Frequency Shifter",
          "tags": [
            "Effect",
            "Ring Modulator"
          ],
          "size": 6.00000048
        },
        {
          "slug": "squinkylabs-vocalanimator",
          "author": "Squinky Labs",
          "name": "Vocal Animator",
          "tags": [
            "Effect",
            "Filter/VCF"
          ],
          "size": 14.000001
        },
        {
          "slug": "squinkylabs-vocalfilter",
          "author": "Squinky Labs",
          "name": "Vocal Filter",
          "tags": [
            "Effect",
            "Filter/VCF"
          ],
          "size": 12.000001
        },
        {
          "slug": "squinkylabs-coloredNoise",
          "author": "Squinky Labs",
          "name": "Colored Noise",
          "tags": [
            "Noise"
          ],
          "size": 6.00000048
        }
      ]
    },
    {
      "slug": "tnorris-BostonBrightonModules",
      "website": "",
      "manual": "",
      "models": [
        {
          "slug": "Dividah",
          "author": "BBI",
          "name": "Dividah",
          "tags": [
            "Clock Modulator"
          ],
          "size": 3.00000024
        },
        {
          "slug": "Hooptie",
          "author": "BBI",
          "name": "Hooptie",
          "tags": [
            "Clock Modulator"
          ],
          "size": 6.00000048
        },
        {
          "slug": "Comparatah",
          "author": "BBI",
          "name": "Comparatah",
          "tags": [
            "Logic"
          ],
          "size": 3.00000024
        },
        {
          "slug": "GetRekt",
          "author": "BBI",
          "name": "GetRekt",
          "tags": [
            "Logic"
          ],
          "size": 2.0
        }
      ]
    },
    {
      "slug": "trowaSoft",
      "website": "",
      "manual": "",
      "models": [
        {
          "slug": "trigSeq",
          "author": "trowaSoft",
          "name": "trigSeq",
          "tags": [
            "Sequencer",
            "External"
          ],
          "size": 26.0000019
        },
        {
          "slug": "trigSeq64",
          "author": "trowaSoft",
          "name": "trigSeq64",
          "tags": [
            "Sequencer",
            "External"
          ],
          "size": 26.0000019
        },
        {
          "slug": "voltSeq",
          "author": "trowaSoft",
          "name": "voltSeq",
          "tags": [
            "Sequencer",
            "External"
          ],
          "size": 26.0000019
        },
        {
          "slug": "cvOSCcv",
          "author": "trowaSoft",
          "name": "cvOSCcv",
          "tags": [
            "External"
          ],
          "size": 26.0000019
        },
        {
          "slug": "multiScope",
          "author": "trowaSoft",
          "name": "multiScope",
          "tags": [
            "Visual",
            "Utility"
          ],
          "size": 42.0000038
        },
        {
          "slug": "multiWave",
          "author": "trowaSoft",
          "name": "multiWave",
          "tags": [
            "Oscillator/VCO",
            "Ring Modulator"
          ],
          "size": 48.0000038
        }
      ]
    },
    {
      "slug": "unless_modules",
      "website": "",
      "manual": "",
      "models": [
        {
          "slug": "piong",
          "author": "unless games",
          "name": "pIOng",
          "tags": [
            "Sequencer",
            "Random",
            "Clock Modulator"
          ],
          "size": 14.000001
        }
      ]
    }
  ]
}