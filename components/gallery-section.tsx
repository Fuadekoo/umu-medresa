"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, ImageIcon, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { useLanguage } from '@/components/language-toggle'
import { translations, TranslationKey } from '@/lib/translations'

// Mock data for gallery items
const galleryItems = [
  {
    id: 1,
    type: 'image',
    src: '/quran-class-students-learning.jpg',
    alt: 'Students learning Quran',
    category: 'images'
  },
  {
    id: 2,
    type: 'video',
    src: '/video-thumbnail-quran-recitation.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder video
    alt: 'Quran Recitation Competition',
    category: 'videos'
  },
  {
    id: 3,
    type: 'image',
    src: '/islamic-center-interior-design.jpg',
    alt: 'Center Interior',
    category: 'images'
  },
  {
    id: 4,
    type: 'image',
    src: '/online-quran-teacher-teaching.jpg',
    alt: 'Online Teaching Session',
    category: 'images'
  },
  {
    id: 5,
    type: 'video',
    src: '/video-thumbnail-tajweed-class.jpg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder video
    alt: 'Tajweed Class Highlights',
    category: 'videos'
  },
  {
    id: 6,
    type: 'image',
    src: '/student-graduation-ceremony.jpg',
    alt: 'Graduation Ceremony',
    category: 'images'
  }
]

export function GallerySection() {
  const { language } = useLanguage()
  const t = (key: TranslationKey) => translations[language][key]
  const [filter, setFilter] = useState<'all' | 'images' | 'videos'>('all')
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null)

  const filteredItems = galleryItems.filter(item => 
    filter === 'all' ? true : item.category === filter
  )

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">{t('ourGallery')}</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('galleryDescription')}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <Button 
            variant={filter === 'all' ? 'default' : 'outline'}
            onClick={() => setFilter('all')}
            className="min-w-[100px]"
          >
            {t('all')}
          </Button>
          <Button 
            variant={filter === 'images' ? 'default' : 'outline'}
            onClick={() => setFilter('images')}
            className="min-w-[100px]"
          >
            {t('images')}
          </Button>
          <Button 
            variant={filter === 'videos' ? 'default' : 'outline'}
            onClick={() => setFilter('videos')}
            className="min-w-[100px]"
          >
            {t('videos')}
          </Button>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer bg-muted"
                onClick={() => setSelectedItem(item)}
              >
                <img 
                  src={item.src || "/placeholder.svg"} 
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  {item.type === 'video' ? (
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                      <ImageIcon className="w-8 h-8 text-white" />
                    </div>
                  )}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-medium truncate">{item.alt}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
          <DialogContent className="max-w-4xl p-0 bg-black/95 border-none text-white overflow-hidden">
            <div className="relative w-full aspect-video flex items-center justify-center">
              {selectedItem?.type === 'video' ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={selectedItem.videoUrl}
                  title={selectedItem.alt}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              ) : (
                <img 
                  src={selectedItem?.src || "/placeholder.svg"} 
                  alt={selectedItem?.alt}
                  className="w-full h-full object-contain"
                />
              )}
            </div>
            <div className="p-4 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent">
              <h4 className="text-lg font-medium text-white">{selectedItem?.alt}</h4>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
