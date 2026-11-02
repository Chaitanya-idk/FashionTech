// ConvertElle Luxury Audio Synth using Web Audio API
// No external assets required; 100% deterministic & royalty-free

let audioCtx = null;
let ambientGain = null;
let ambientOscillators = [];
let isPlayingAmbient = false;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export const soundscape = {
  toggleAmbient(enable) {
    const ctx = getAudioContext();
    if (!ctx) return false;

    if (enable && !isPlayingAmbient) {
      try {
        ambientGain = ctx.createGain();
        ambientGain.gain.setValueAtTime(0.001, ctx.currentTime);
        ambientGain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 3);

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(450, ctx.currentTime);

        ambientGain.connect(filter);
        filter.connect(ctx.destination);

        // Luxury ethereal pentatonic chords (A2, E3, A3, C#4, E4)
        const freqs = [110, 164.81, 220, 277.18, 329.63];
        ambientOscillators = freqs.map((f, i) => {
          const osc = ctx.createOscillator();
          osc.type = i % 2 === 0 ? 'sine' : 'triangle';
          osc.frequency.setValueAtTime(f + (Math.random() * 0.4 - 0.2), ctx.currentTime);
          
          // Slow LFO for organic breathing effect
          const lfo = ctx.createOscillator();
          const lfoGain = ctx.createGain();
          lfo.frequency.setValueAtTime(0.1 + i * 0.05, ctx.currentTime);
          lfoGain.gain.setValueAtTime(2.0, ctx.currentTime);
          lfo.connect(osc.frequency);
          lfo.start();

          osc.connect(ambientGain);
          osc.start();
          return { osc, lfo };
        });

        isPlayingAmbient = true;
        return true;
      } catch (e) {
        console.warn('Audio ambient init error:', e);
        return false;
      }
    } else if (!enable && isPlayingAmbient) {
      if (ambientGain && ctx) {
        try {
          ambientGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.5);
          setTimeout(() => {
            ambientOscillators.forEach(({ osc, lfo }) => {
              try { osc.stop(); lfo.stop(); } catch(e) {}
            });
            ambientOscillators = [];
            isPlayingAmbient = false;
          }, 1500);
        } catch(e) {
          isPlayingAmbient = false;
        }
      }
      return false;
    }
    return isPlayingAmbient;
  },

  playChime(type = 'chime') {
    const ctx = getAudioContext();
    if (!ctx) return;
    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      if (type === 'addToCart') {
        // High luxury crystal harmonic chime (E5 -> B5)
        osc.type = 'sine';
        osc.frequency.setValueAtTime(659.25, now);
        osc.frequency.exponentialRampToValueAtTime(987.77, now + 0.15);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.9);
      } else if (type === 'transform') {
        // Shimmering celestial swoop
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.2);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.6);
      } else if (type === 'click') {
        // Subtle luxury velvet tap
        osc.type = 'sine';
        osc.frequency.setValueAtTime(320, now);
        gain.gain.setValueAtTime(0.025, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);
      } else {
        // Default chime
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.4);
      }

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 1.0);
    } catch (e) {
      // Graceful fallback if user hasn't interacted with audio yet
    }
  }
};

