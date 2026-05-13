import React, { useState } from 'react';
import { Plus, Trash2, Play, Youtube, X, ExternalLink } from 'lucide-react';

function getYouTubeId(url) {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?.*v=|embed\/|v\/))([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : null;
}

function getYouTubeThumbnail(videoId) {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

export default function FreeCourses() {
  const [videos, setVideos] = useState([
    {
      id: 1,
      title: 'React JS Full Course',
      url: 'https://www.youtube.com/watch?v=bMknfKXIFA8',
      videoId: 'bMknfKXIFA8',
      category: 'React',
    },
  ]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: '', url: '', category: '' });
  const [error, setError] = useState('');
  const [playingId, setPlayingId] = useState(null);

  const handleAdd = () => {
    setError('');
    const videoId = getYouTubeId(form.url);
    if (!form.title.trim()) { setError('Please enter a title.'); return; }
    if (!videoId) { setError('Invalid YouTube URL. Please check the link.'); return; }

    setVideos(prev => [...prev, {
      id: Date.now(),
      title: form.title.trim(),
      url: form.url.trim(),
      videoId,
      category: form.category.trim() || 'General',
    }]);
    setForm({ title: '', url: '', category: '' });
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setVideos(prev => prev.filter(v => v.id !== id));
    if (playingId === id) setPlayingId(null);
  };

  return (
    <div>
      {/* Add Button */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-white/40 text-xs font-mono">
          {videos.length} video{videos.length !== 1 ? 's' : ''} added
        </p>
        <button
          onClick={() => { setShowForm(!showForm); setError(''); }}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-black text-xs font-bold uppercase tracking-wider rounded hover:opacity-90 transition-all"
        >
          <Plus size={13} />
          Add Video
        </button>
      </div>

      {/* Add Form */}
      {showForm && (
        <div className="mb-8 border border-primary/20 bg-[#111] rounded p-6 animate-fade-in">
          <h3 className="text-sm font-bold mb-5 flex items-center gap-2">
            <Youtube size={16} className="text-primary" /> Add YouTube Video
          </h3>
          <div className="space-y-4">
            <div>
              <label className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-1.5 block">
                Video Title *
              </label>
              <input
                type="text"
                value={form.title}
                onChange={e => setForm({ ...form, title: e.target.value })}
                placeholder="e.g. React JS Full Course for Beginners"
                className="w-full bg-transparent border-b border-white/10 py-3 text-sm font-mono placeholder:text-white/20 focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-1.5 block">
                YouTube URL *
              </label>
              <input
                type="text"
                value={form.url}
                onChange={e => setForm({ ...form, url: e.target.value })}
                placeholder="https://www.youtube.com/watch?v=..."
                className="w-full bg-transparent border-b border-white/10 py-3 text-sm font-mono placeholder:text-white/20 focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-1.5 block">
                Category (optional)
              </label>
              <input
                type="text"
                value={form.category}
                onChange={e => setForm({ ...form, category: e.target.value })}
                placeholder="e.g. React, JavaScript, CSS..."
                className="w-full bg-transparent border-b border-white/10 py-3 text-sm font-mono placeholder:text-white/20 focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            {error && (
              <p className="text-red-400 text-xs font-mono">{error}</p>
            )}
            <div className="flex gap-3 pt-2">
              <button
                onClick={handleAdd}
                className="px-6 py-2.5 bg-primary text-black text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-all"
              >
                Upload Video
              </button>
              <button
                onClick={() => { setShowForm(false); setError(''); setForm({ title: '', url: '', category: '' }); }}
                className="px-6 py-2.5 border border-white/10 text-white/50 text-xs font-bold uppercase tracking-wider hover:border-white/30 hover:text-white/80 transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Video Grid */}
      {videos.length === 0 ? (
        <div className="border border-white/5 bg-[#111] rounded p-12 text-center">
          <Youtube size={32} className="text-white/10 mx-auto mb-4" />
          <p className="text-white/30 text-sm font-mono">No videos added yet.</p>
          <p className="text-white/20 text-xs font-mono mt-1">Click "Add Video" to get started.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {videos.map(video => (
            <div
              key={video.id}
              className="group border border-white/5 bg-[#111] rounded overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              {/* Thumbnail / Player */}
              <div className="relative aspect-video bg-black overflow-hidden">
                {playingId === video.id ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
                    title={video.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <img
                      src={getYouTubeThumbnail(video.videoId)}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={() => setPlayingId(video.id)}
                        className="w-14 h-14 bg-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-primary/30"
                      >
                        <Play size={20} className="text-black ml-1" fill="black" />
                      </button>
                    </div>
                    {/* YouTube badge */}
                    <div className="absolute bottom-2 right-2 bg-red-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1">
                      <Youtube size={10} /> YouTube
                    </div>
                  </>
                )}
                {playingId === video.id && (
                  <button
                    onClick={() => setPlayingId(null)}
                    className="absolute top-2 right-2 w-7 h-7 bg-black/70 rounded-full flex items-center justify-center hover:bg-black transition-colors z-10"
                  >
                    <X size={12} />
                  </button>
                )}
              </div>

              {/* Info */}
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-primary border border-primary/20 px-1.5 py-0.5 rounded">
                      {video.category}
                    </span>
                    <h4 className="text-sm font-bold mt-2 leading-snug line-clamp-2">{video.title}</h4>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/5">
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[10px] font-mono text-white/30 hover:text-primary transition-colors"
                  >
                    <ExternalLink size={11} /> Open in YouTube
                  </a>
                  <button
                    onClick={() => handleDelete(video.id)}
                    className="p-1.5 text-white/20 hover:text-red-400 hover:bg-red-500/10 rounded transition-all"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}