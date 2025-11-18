"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Clock, Award, Star, CheckCircle2 } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import { LanguageToggle, useLanguage } from '@/components/language-toggle'
import { translations, TranslationKey } from '@/lib/translations'
import { GallerySection } from '@/components/gallery-section'
import { MobileSidebar } from '@/components/mobile-sidebar'

export default function Home() {
  const { language } = useLanguage()
  const t = (key: TranslationKey) => translations[language][key]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-bold text-lg leading-tight">UMU WEREKA</h1>
              <p className="text-xs text-muted-foreground">ONLINE MEDRESA</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">{t('about')}</a>
            <a href="#courses" className="text-sm font-medium hover:text-primary transition-colors">{t('courses')}</a>
            <a href="#gallery" className="text-sm font-medium hover:text-primary transition-colors">{t('gallery')}</a>
            <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">{t('testimonials')}</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">{t('contact')}</a>
          </nav>
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-2">
              <ThemeToggle />
              <LanguageToggle />
              <Button>{t('enrollNow')}</Button>
            </div>
            <MobileSidebar />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-primary">{t('welcome')}</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              {t('heroTitle')}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
              {t('heroDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base">
                {t('startFreeTrial')}
              </Button>
              <Button size="lg" variant="outline" className="text-base">
                {t('viewCourses')}
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>{t('qualifiedTeachers')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>{t('flexibleSchedule')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>{t('oneOnOneClasses')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">{t('whyChooseUs')}</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('whyDescription')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{t('expertTeachers')}</CardTitle>
                <CardDescription>
                  {t('expertDescription')}
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{t('flexibleTiming')}</CardTitle>
                <CardDescription>
                  {t('timingDescription')}
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{t('comprehensiveCurriculum')}</CardTitle>
                <CardDescription>
                  {t('curriculumDescription')}
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{t('certifiedPrograms')}</CardTitle>
                <CardDescription>
                  {t('programsDescription')}
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">{t('ourCourses')}</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('coursesDescription')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-primary" />
              </div>
              <CardHeader>
                <CardTitle>{t('quranReading')}</CardTitle>
                <CardDescription>
                  {t('quranReadingDesc')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>{t('arabicAlphabet')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>{t('properPronunciation')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>{t('readingPractice')}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Star className="w-16 h-16 text-primary" />
              </div>
              <CardHeader>
                <CardTitle>{t('tajweedMastery')}</CardTitle>
                <CardDescription>
                  {t('tajweedDesc')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>{t('tajweedRules')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>{t('makharij')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>{t('advancedRecitation')}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Award className="w-16 h-16 text-primary" />
              </div>
              <CardHeader>
                <CardTitle>{t('quranMemorization')}</CardTitle>
                <CardDescription>
                  {t('memorizationDesc')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>{t('memorizationTechniques')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>{t('revisionSchedule')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>{t('progressTracking')}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <GallerySection />

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">{t('studentTestimonials')}</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('testimonialsDescription')}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <CardDescription className="text-base">
                  {t('testimonial1')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">{t('testimonial1Name')}</p>
                <p className="text-sm text-muted-foreground">{t('testimonial1Role')}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <CardDescription className="text-base">
                  {t('testimonial2')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">{t('testimonial2Name')}</p>
                <p className="text-sm text-muted-foreground">{t('testimonial2Role')}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <CardDescription className="text-base">
                  {t('testimonial3')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">{t('testimonial3Name')}</p>
                <p className="text-sm text-muted-foreground">{t('testimonial3Role')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-br from-primary to-accent text-primary-foreground border-0 overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('/islamic-geometric-pattern.jpg')] opacity-10" />
            <CardHeader className="text-center relative z-10 py-12">
              <CardTitle className="text-3xl md:text-4xl mb-4">
                {t('ctaTitle')}
              </CardTitle>
              <CardDescription className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
                {t('ctaDescription')}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center pb-12 relative z-10">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-base">
                  {t('getFreeTrial')}
                </Button>
                <Button size="lg" variant="outline" className="text-base bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  {t('contactUs')}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-bold">UMU WEREKA</h4>
                  <p className="text-xs text-muted-foreground">ONLINE MEDRESA</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                {t('footerTagline')}
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">{t('quickLinks')}</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-primary transition-colors">{t('aboutUs')}</a></li>
                <li><a href="#courses" className="hover:text-primary transition-colors">{t('ourCoursesLink')}</a></li>
                <li><a href="#gallery" className="hover:text-primary transition-colors">{t('galleryLink')}</a></li>
                <li><a href="#testimonials" className="hover:text-primary transition-colors">{t('testimonialsLink')}</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">{t('contactLink')}</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">{t('coursesFooter')}</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">{t('quranReadingLink')}</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">{t('tajweedLink')}</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">{t('memorizationLink')}</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">{t('arabicLanguage')}</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">{t('contactInfo')}</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>{t('email')}</li>
                <li>{t('phone')}</li>
                <li>{t('available247')}</li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} {t('copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
