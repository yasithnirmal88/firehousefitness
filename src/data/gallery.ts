export interface GalleryImage {
  src: string
  alt: string
  caption?: string
  size?: 'small' | 'medium' | 'large'
}

export const galleryImages: GalleryImage[] = [
  { src: 'https://images.unsplash.com/photo-1534256957339-8ba153d7c5ac?w=800&q=80', alt: 'Battle ropes workout', caption: 'Battle Ropes', size: 'large' },
  { src: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80', alt: 'Heavy bag training', caption: 'Heavy Bags', size: 'medium' },
  { src: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=800&q=80', alt: 'Kettlebell workout', caption: 'Kettlebells', size: 'small' },
  { src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80', alt: 'Tire flipping', caption: 'Tire Training', size: 'medium' },
  { src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80', alt: 'Sled push', caption: 'Sled Pushes', size: 'small' },
  { src: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80', alt: 'Rope climb', caption: 'Rope Climbs', size: 'large' },
  { src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80', alt: 'Group workout', caption: 'Team Training', size: 'medium' },
  { src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80', alt: 'Gym interior', caption: 'The Firehouse', size: 'large' },
]
