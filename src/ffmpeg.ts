/* eslint-disable @withfig/fig-linter/no-useless-arrays */

const completionSpec: Fig.Spec = {
  name: "ffmpeg",
  description: "Play, record, convert, and stream audio and video",

  parserDirectives: {
    flagsArePosixNoncompliant: true,
  },

  args: {
    name: "outfile",
    description: "Output file",
    template: "filepaths",
  },

  options: [
    {
      name: "-i",
      description: "Input file",

      isRequired: true,

      args: {
        name: "infile",

        template: "filepaths",
      },
    },
    {
      name: "-L",
      description: "Show license",
    },
    {
      name: "-h",
      description: "Show help",

      args: {
        name: "topic",
      },
    },
    {
      name: "-?",
      description: "Show help",

      args: {
        name: "topic",
      },
    },
    {
      name: "-help",
      description: "Show help",

      args: {
        name: "topic",
      },
    },
    {
      name: "--help",
      description: "Show help",

      args: {
        name: "topic",
      },
    },
    {
      name: "-version",
      description: "Show version",
    },
    {
      name: "-buildconf",
      description: "Show build configuration",
    },
    {
      name: "-formats",
      description: "Show available formats",
    },
    {
      name: "-muxers",
      description: "Show available muxers",
    },
    {
      name: "-demuxers",
      description: "Show available demuxers",
    },
    {
      name: "-devices",
      description: "Show available devices",
    },
    {
      name: "-codecs",
      description: "Show available codecs",
    },
    {
      name: "-decoders",
      description: "Show available decoders",
    },
    {
      name: "-encoders",
      description: "Show available encoders",
    },
    {
      name: "-bsfs",
      description: "Show available bit stream filters",
    },
    {
      name: "-protocols",
      description: "Show available protocols",
    },
    {
      name: "-filters",
      description: "Show available filters",
    },
    {
      name: "-pix_fmts",
      description: "Show available pixel formats",
    },
    {
      name: "-layouts",
      description: "Show standard channel layouts",
    },
    {
      name: "-sample_fmts",
      description: "Show available audio sample formats",
    },
    {
      name: "-colors",
      description: "Show available color names",
    },
    {
      name: "-sources",
      description: "List sources of the input device",

      args: {
        name: "device",

        generators: {
          script: "ffmpeg -devices",
          postProcess: (out) => {
            return out
              .split("\n")
              .filter(Boolean)
              .map((k) => k.split(" ").filter(Boolean)[1])
              .filter(Boolean)
              .filter((k) => k !== "=")
              .map((k) => ({ name: k }));
          },
        },
      },
    },
    {
      name: "-sinks",
      description: "List sinks of the output device",

      args: {
        name: "device",

        generators: {
          script: "ffmpeg -devices",
          postProcess: (out) => {
            return out
              .split("\n")
              .filter(Boolean)
              .map((k) => k.split(" ").filter(Boolean)[1])
              .filter(Boolean)
              .filter((k) => k !== "=")
              .map((k) => ({ name: k }));
          },
        },
      },
    },
    {
      name: "-hwaccels",
      description: "Show available HW acceleration methods",
    },
    {
      name: "-loglevel",
      description: "Set logging level",

      args: {
        name: "loglevel",
      },
    },
    {
      name: "-v",
      description: "Set logging level",

      args: {
        name: "loglevel",
      },
    },
    {
      name: "-report",
      description: "Generate a report",
    },
    {
      name: "-max_alloc",
      description: "Set maximum size of a single allocated block",

      args: {
        name: "bytes",
      },
    },
    {
      name: "-y",
      description: "Overwrite output files",
    },
    {
      name: "-n",
      description: "Never overwrite output files",
    },
    {
      name: "-ignore_unknown",
      description: "Ignore unknown stream types",
    },
    {
      name: "-filter_threads",
      description: "Number of non-complex filter threads",
    },
    {
      name: "-filter_complex_threads",
      description: "Number of threads for -filter_complex",
    },
    {
      name: "-stats",
      description: "Print progress report during encoding",
    },
    {
      name: "-max_error_rate",
      description:
        "Ratio of errors (0.0: no errors, 1.0: 100% errors) above which ffmpeg returns an error instead of success",

      args: {
        name: "maximum error rate",
      },
    },
    {
      name: "-bits_per_raw_sample",
      description: "Set the number of bits per raw sample",

      args: {
        name: "number",
      },
    },
    {
      name: "-vol",
      description: "Change audio volume (256=normal)",

      args: {
        name: "volume",
      },
    },
    {
      name: "-cpuflags",
      description: "Force specific cpu flags",

      args: {
        name: "flags",
      },
    },
    {
      name: "-hide_banner",
      description: "Do not show program banner",

      args: {
        name: "hide_banner",
      },
    },
    {
      name: "-copy_unknown",
      description: "Copy unknown stream types",
    },
    {
      name: "-benchmark",
      description: "Add timings for benchmarking",
    },
    {
      name: "-benchmark_all",
      description: "Add timings for each task",
    },
    {
      name: "-progress",
      description: "Write program-readable progress information",

      args: {
        name: "url",
      },
    },
    {
      name: "-stdin",
      description: "Enable or disable interaction on standard input",
    },
    {
      name: "-timelimit",
      description: "Set max runtime in seconds",

      args: {
        name: "limit",
      },
    },
    {
      name: "-dump",
      description: "Dump each input packet",
    },
    {
      name: "-hex",
      description: "When dumping packets, also dump the payload",
    },
    {
      name: "-vsync",
      description: "Video sync method",
    },
    {
      name: "-frame_drop_threshold",
      description: "Frame drop threshold",
    },
    {
      name: "-async",
      description: "Audio sync method",
    },
    {
      name: "-adrift_threshold",
      description: "Audio drift threshold",

      args: {
        name: "threshold",
      },
    },
    {
      name: "-copyts",
      description: "Copy timestamps",
    },
    {
      name: "-start_at_zero",
      description: "Shift input timestamps to start at 0 when using copyts",
    },
    {
      name: "-copytb",
      description: "Copy input stream time base when stream copying",

      args: {
        name: "mode",
      },
    },
    {
      name: "-dts_delta_threshold",
      description: "Timestamp discontinuity delta threshold",

      args: {
        name: "threshold",
      },
    },
    {
      name: "-dts_error_threshold",
      description: "Timestamp error delta threshold",

      args: {
        name: "threshold",
      },
    },
    {
      name: "-xerror",
      description: "Exit on error",

      args: {
        name: "error",
      },
    },
    {
      name: "-abort_on",
      description: "Abort on the specified condition flags",

      args: {
        name: "flags",
      },
    },
    {
      name: "-filter_complex",
      description: "Create a complex filtergraph",

      args: {
        name: "graph_description",
      },
    },
    {
      name: "-lavfi",
      description: "Create a complex filtergraph",

      args: {
        name: "graph_description",
      },
    },
    {
      name: "-filter_complex_script",
      description: "Read complex filtergraph description from a file",

      args: {
        name: "filename",
      },
    },
    {
      name: "-debug_ts",
      description: "Print timestamp debugging info",
    },
    {
      name: "-intra",
      description: "Deprecated use -g 1",
      deprecated: true,
    },
    {
      name: "-sameq",
      description: "Removed",
    },
    {
      name: "-same_quant",
      description: "Removed",
    },
    {
      name: "-deinterlace",
      description: "This option is deprecated, use the yadif filter instead",
      deprecated: true,
    },
    {
      name: "-psnr",
      description: "Calculate PSNR of compressed frames",
    },
    {
      name: "-vstats",
      description: "Dump video coding statistics to file",
    },
    {
      name: "-vstats_file",
      description: "Dump video coding statistics to file",

      args: {
        name: "file",
      },
    },
    {
      name: "-vstats_version",
      description: "Version of the vstats format to use",
    },
    {
      name: "-qphist",
      description: "Show QP histogram",
    },
    {
      name: "-vc",
      description: "Deprecated, use -channel",
      deprecated: true,

      args: {
        name: "channel",
      },
    },
    {
      name: "-tvstd",
      description: "Deprecated, use -standard",
      deprecated: true,

      args: {
        name: "standard",
      },
    },
    {
      name: "-isync",
      description: "This option is deprecated and does nothing",
      deprecated: true,
    },
    {
      name: "-sdp_file",
      description: "Specify a file in which to print sdp information",

      args: {
        name: "file",
      },
    },
    {
      name: "-vaapi_device",
      description: "Set VAAPI hardware device (DRM path or X11 display name)",

      args: {
        name: "device",

        generators: {
          script: "ffmpeg -devices",
          postProcess: (out) => {
            return out
              .split("\n")
              .filter(Boolean)
              .map((k) => k.split(" ").filter(Boolean)[1])
              .filter(Boolean)
              .filter((k) => k !== "=")
              .map((k) => ({ name: k }));
          },
        },
      },
    },
    {
      name: "-init_hw_device",
      description: "Initialise hardware device",

      args: {
        name: "args",
      },
    },
    {
      name: "-filter_hw_device",
      description: "Set hardware device used when filtering",

      args: {
        name: "device",

        generators: {
          script: "ffmpeg -devices",
          postProcess: (out) => {
            return out
              .split("\n")
              .filter(Boolean)
              .map((k) => k.split(" ").filter(Boolean)[1])
              .filter(Boolean)
              .filter((k) => k !== "=")
              .map((k) => ({ name: k }));
          },
        },
      },
    },
    {
      name: "-f",
      description: "Force format",

      args: {
        name: "fmt",
      },
    },
    {
      name: "-c",
      description: "Codec name",

      args: {
        name: "codec",

        generators: {
          script: "ffmpeg -codecs",
          postProcess: (out) => {
            return out
              .split("\n")
              .filter(Boolean)
              .map((k) => k.split(" ").filter(Boolean)[1])
              .filter(Boolean)
              .filter((k) => k !== "=")
              .map((k) => ({ name: k }));
          },
        },
      },
    },
    {
      name: "-codec",
      description: "Codec name",

      args: {
        name: "codec",

        generators: {
          script: "ffmpeg -codecs",
          postProcess: (out) => {
            return out
              .split("\n")
              .filter(Boolean)
              .map((k) => k.split(" ").filter(Boolean)[1])
              .filter(Boolean)
              .filter((k) => k !== "=")
              .map((k) => ({ name: k }));
          },
        },
      },
    },
    {
      name: "-pre",
      description: "Preset name",

      args: {
        name: "preset",
      },
    },
    {
      name: "-map_metadata",
      description: "Set metadata information of outfile from infile",

      args: {
        name: "outfile[,metadata]:infile[,metadata]",
      },
    },
    {
      name: "-t",
      description: 'Record or transcode "duration" seconds of audio/video',

      args: {
        name: "duration",
      },
    },
    {
      name: "-to",
      description: "Record or transcode stop time",

      args: {
        name: "time_stop",
      },
    },
    {
      name: "-fs",
      description: "Set the limit file size in bytes",

      args: {
        name: "limit_size",
      },
    },
    {
      name: "-ss",
      description: "Set the start time offset",

      args: {
        name: "time_off",
      },
    },
    {
      name: "-sseof",
      description: "Set the start time offset relative to EOF",

      args: {
        name: "time_off",
      },
    },
    {
      name: "-seek_timestamp",
      description: "Enable/disable seeking by timestamp with -ss",
    },
    {
      name: "-timestamp",
      description:
        "Set the recording timestamp ('now' to set the current time)",

      args: {
        name: "time",
      },
    },
    {
      name: "-metadata",
      description: "Add metadata",

      args: {
        name: "string=string",
      },
    },
    {
      name: "-program",
      description: "Add program with specified streams",

      args: {
        name: "title=string:st=number...",
      },
    },
    {
      name: "-target",
      description:
        'Specify target file type ("vcd", "svcd", "dvd", "dv" or "dv50" with optional prefixes "pal-", "ntsc-" or "film-")',

      args: {
        name: "type",
      },
    },
    {
      name: "-apad",
      description: "Audio pad",
    },
    {
      name: "-frames",
      description: "Set the number of frames to output",

      args: {
        name: "number",
      },
    },
    {
      name: "-filter",
      description: "Set stream filtergraph",

      args: {
        name: "filter_graph",
      },
    },
    {
      name: "-filter_script",
      description: "Read stream filtergraph description from a file",

      args: {
        name: "filename",
      },
    },
    {
      name: "-reinit_filter",
      description: "Reinit filtergraph on input parameter changes",
    },
    {
      name: "-discard",
      description: "Discard",
    },
    {
      name: "-disposition",
      description: "Disposition",
    },
    {
      name: "-map",
      description: "Set input stream mapping",

      args: {
        name: "[-]input_file_id[:stream_specifier][,sync_file_id[:stream_s",
      },
    },
    {
      name: "-map_channel",
      description: "Map an audio channel from one stream to another",

      args: {
        name: "file.stream.channel[:syncfile.syncstream]",
      },
    },
    {
      name: "-map_chapters",
      description: "Set chapters mapping",

      args: {
        name: "input_file_index",
      },
    },
    {
      name: "-accurate_seek",
      description: "Enable/disable accurate seeking with -ss",
    },
    {
      name: "-itsoffset",
      description: "Set the input ts offset",

      args: {
        name: "time_off",
      },
    },
    {
      name: "-itsscale",
      description: "Set the input ts scale",

      args: {
        name: "scale",
      },
    },
    {
      name: "-dframes",
      description: "Set the number of data frames to output",

      args: {
        name: "number",
      },
    },
    {
      name: "-re",
      description: "Read input at native frame rate",
    },
    {
      name: "-shortest",
      description: "Finish encoding within shortest input",
    },
    {
      name: "-bitexact",
      description: "Bitexact mode",
    },
    {
      name: "-copyinkf",
      description: "Copy initial non-keyframes",
    },
    {
      name: "-copypriorss",
      description: "Copy or discard frames before start time",
    },
    {
      name: "-tag",
      description: "Force codec tag/fourcc",

      args: {
        name: "fourcc/tag",
      },
    },
    {
      name: "-q",
      description: "Use fixed quality scale (VBR)",

      args: {
        name: "q",
      },
    },
    {
      name: "-qscale",
      description: "Use fixed quality scale (VBR)",

      args: {
        name: "q",
      },
    },
    {
      name: "-profile",
      description: "Set profile",

      args: {
        name: "profile",
      },
    },
    {
      name: "-attach",
      description: "Add an attachment to the output file",

      args: {
        name: "filename",
      },
    },
    {
      name: "-dump_attachment",
      description: "Extract an attachment into a file",

      args: {
        name: "filename",
      },
    },
    {
      name: "-stream_loop",
      description: "Set number of times input stream shall be looped",

      args: {
        name: "loop count",
      },
    },
    {
      name: "-thread_queue_size",
      description: "Set the maximum number of queued packets from the demuxer",
    },
    {
      name: "-find_stream_info",
      description:
        "Read and decode the streams to fill missing information with heuristics",
    },
    {
      name: "-autorotate",
      description: "Automatically insert correct rotate filters",
    },
    {
      name: "-muxdelay",
      description: "Set the maximum demux-decode delay",

      args: {
        name: "seconds",
      },
    },
    {
      name: "-muxpreload",
      description: "Set the initial demux-decode delay",

      args: {
        name: "seconds",
      },
    },
    {
      name: "-time_base",
      description:
        "Set the desired time base hint for output stream (1:24, 1:48000 or 0.04166, 2.0833e-5)",

      args: {
        name: "ratio",
      },
    },
    {
      name: "-enc_time_base",
      description:
        "Set the desired time base for the encoder (1:24, 1:48000 or 0.04166, 2.0833e-5). two special values are defined - 0 = use frame rate (video) or sample rate (audio),-1 = match source time base",

      args: {
        name: "ratio",
      },
    },
    {
      name: "-bsf",
      description: "A comma-separated list of bitstream filters",

      args: {
        name: "bitstream_filters",
      },
    },
    {
      name: "-fpre",
      description: "Set options from indicated preset file",

      args: {
        name: "filename",
      },
    },
    {
      name: "-max_muxing_queue_size",
      description:
        "Maximum number of packets that can be buffered while waiting for all streams to initialize",

      args: {
        name: "packets",
      },
    },
    {
      name: "-dcodec",
      description: "Force data codec ('copy' to copy stream)",

      args: {
        name: "codec",

        generators: {
          script: "ffmpeg -codecs",
          postProcess: (out) => {
            return out
              .split("\n")
              .filter(Boolean)
              .map((k) => k.split(" ").filter(Boolean)[1])
              .filter(Boolean)
              .filter((k) => k !== "=")
              .map((k) => ({ name: k }));
          },
        },
      },
    },
    {
      name: "-vframes",
      description: "Set the number of video frames to output",

      args: {
        name: "number",
      },
    },
    {
      name: "-r",
      description: "Set frame rate (Hz value, fraction or abbreviation)",

      args: {
        name: "rate",
      },
    },
    {
      name: "-s",
      description: "Set frame size (WxH or abbreviation)",

      args: {
        name: "size",
      },
    },
    {
      name: "-aspect",
      description: "Set aspect ratio (4:3, 16:9 or 1.3333, 1.7777)",

      args: {
        name: "aspect",
      },
    },
    {
      name: "-vn",
      description: "Disable video",
    },
    {
      name: "-vcodec",
      description: "Force video codec ('copy' to copy stream)",

      args: {
        name: "codec",

        generators: {
          script: "ffmpeg -codecs",
          postProcess: (out) => {
            return out
              .split("\n")
              .filter(Boolean)
              .map((k) => k.split(" ").filter(Boolean)[1])
              .filter(Boolean)
              .filter((k) => k !== "=")
              .map((k) => ({ name: k }));
          },
        },
      },
    },
    {
      name: "-timecode",
      description: "Set initial TimeCode value",

      args: {
        name: "hh:mm:ss[:;.]ff",
      },
    },
    {
      name: "-pass",
      description: "Select the pass number (1 to 3)",

      args: {
        name: "n",
      },
    },
    {
      name: "-vf",
      description: "Set video filters",

      args: {
        name: "filter_graph",
      },
    },
    {
      name: "-ab",
      description: "Audio bitrate (please use -b:a)",

      args: {
        name: "bitrate",
      },
    },
    {
      name: "-b",
      description: "Video bitrate (please use -b:v)",

      args: {
        name: "bitrate",
      },
    },
    {
      name: "-dn",
      description: "Disable data",
    },
    {
      name: "-pix_fmt",
      description: "Set pixel format",

      args: {
        name: "format",
      },
    },
    {
      name: "-rc_override",
      description: "Rate control override for specific intervals",

      args: {
        name: "override",
      },
    },
    {
      name: "-passlogfile",
      description: "Select two pass log file name prefix",

      args: {
        name: "prefix",
      },
    },
    {
      name: "-intra_matrix",
      description: "Specify intra matrix coeffs",

      args: {
        name: "matrix",
      },
    },
    {
      name: "-inter_matrix",
      description: "Specify inter matrix coeffs",

      args: {
        name: "matrix",
      },
    },
    {
      name: "-chroma_intra_matrix",
      description: "Specify intra matrix coeffs",

      args: {
        name: "matrix",
      },
    },
    {
      name: "-top",
      description: "Top=1/bottom=0/auto=-1 field first",
    },
    {
      name: "-vtag",
      description: "Force video tag/fourcc",

      args: {
        name: "fourcc/tag",
      },
    },
    {
      name: "-force_fps",
      description:
        "Force the selected framerate, disable the best supported framerate selection",
    },
    {
      name: "-streamid",
      description: "Set the value of an outfile streamid",

      args: {
        name: "streamIndex:value",
      },
    },
    {
      name: "-force_key_frames",
      description: "Force key frames at specified timestamps",

      args: {
        name: "timestamps",
      },
    },
    {
      name: "-hwaccel",
      description: "Use HW accelerated decoding",

      args: {
        name: "hwaccel name",
      },
    },
    {
      name: "-hwaccel_device",
      description: "Select a device for HW acceleration",

      args: {
        name: "devicename",
      },
    },
    {
      name: "-hwaccel_output_format",
      description: "Select output format used with HW accelerated decoding",

      args: {
        name: "format",
      },
    },
    {
      name: "-vbsf",
      description: "Deprecated",
      deprecated: true,

      args: {
        name: "video bitstream_filters",
      },
    },
    {
      name: "-vpre",
      description: "Set the video options to the indicated preset",

      args: {
        name: "preset",
      },
    },
    {
      name: "-aframes",
      description: "Set the number of audio frames to output",

      args: {
        name: "number",
      },
    },
    {
      name: "-aq",
      description: "Set audio quality (codec-specific)",

      args: {
        name: "quality",
      },
    },
    {
      name: "-ar",
      description: "Set audio sampling rate (in Hz)",

      args: {
        name: "rate",
      },
    },
    {
      name: "-ac",
      description: "Set number of audio channels",

      args: {
        name: "channels",
      },
    },
    {
      name: "-an",
      description: "Disable audio",
    },
    {
      name: "-acodec",
      description: "Force audio codec ('copy' to copy stream)",

      args: {
        name: "codec",

        generators: {
          script: "ffmpeg -codecs",
          postProcess: (out) => {
            return out
              .split("\n")
              .filter(Boolean)
              .map((k) => k.split(" ").filter(Boolean)[1])
              .filter(Boolean)
              .filter((k) => k !== "=")
              .map((k) => ({ name: k }));
          },
        },
      },
    },
    {
      name: "-af",
      description: "Set audio filters",

      args: {
        name: "filter_graph",
      },
    },
    {
      name: "-atag",
      description: "Force audio tag/fourcc",

      args: {
        name: "fourcc/tag",
      },
    },
    {
      name: "-sample_fmt",
      description: "Set sample format",

      args: {
        name: "format",
      },
    },
    {
      name: "-channel_layout",
      description: "Set channel layout",

      args: {
        name: "layout",
      },
    },
    {
      name: "-guess_layout_max",
      description:
        "Set the maximum number of channels to try to guess the channel layout",
    },
    {
      name: "-absf",
      description: "Deprecated",
      deprecated: true,

      args: {
        name: "audio bitstream_filters",
      },
    },
    {
      name: "-apre",
      description: "Set the audio options to the indicated preset",

      args: {
        name: "preset",
      },
    },
    {
      name: "-sn",
      description: "Disable subtitle",
    },
    {
      name: "-scodec",
      description: "Force subtitle codec ('copy' to copy stream)",

      args: {
        name: "codec",

        generators: {
          script: "ffmpeg -codecs",
          postProcess: (out) => {
            return out
              .split("\n")
              .filter(Boolean)
              .map((k) => k.split(" ").filter(Boolean)[1])
              .filter(Boolean)
              .filter((k) => k !== "=")
              .map((k) => ({ name: k }));
          },
        },
      },
    },
    {
      name: "-stag",
      description: "Force subtitle tag/fourcc",

      args: {
        name: "fourcc/tag",
      },
    },
    {
      name: "-fix_sub_duration",
      description: "Fix subtitles duration",
    },
    {
      name: "-canvas_size",
      description: "Set canvas size (WxH or abbreviation)",

      args: {
        name: "size",
      },
    },
    {
      name: "-spre",
      description: "Set the subtitle options to the indicated preset",

      args: {
        name: "preset",
      },
    },
  ],
};

export default completionSpec;
