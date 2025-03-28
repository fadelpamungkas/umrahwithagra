"use client"

import { useLanguage } from "@/components/language-provider"
import InstagramCard from "@/components/instagram-card"

const Posts = () => {
  const { t } = useLanguage()

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            {t("home.posts.title")}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
        </div>

        <div className="container mx-auto grid gap-6 p-4 md:grid-cols-2 lg:grid-cols-3">
          <InstagramCard
            username="umrahwithagra"
            followers="94.1K"
            targetUrl="https://www.instagram.com/p/C_S1MG2h_fx/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
            imageUrl="/images/instagram_image_1.jpg"
            avatarUrl="/images/logo.webp"
            likes={509.754}
          />
          <InstagramCard
            username="umrahwithagra"
            followers="94.1K"
            targetUrl="https://www.instagram.com/reel/C_H0U5aPKMI/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
            imageUrl="/images/instagram_image_1.jpg"
            avatarUrl="/images/logo.webp"
            likes={120}
          />
          <InstagramCard
            username="umrahwithagra"
            followers="94.1K"
            targetUrl="https://www.instagram.com/reel/C_qA9O4PLSk/"
            imageUrl="/images/instagram_image_1.jpg"
            avatarUrl="/images/logo.webp"
            likes={37}
            isVideo={true}
          />
        </div>

      </div>
    </section>
  )
}

export default Posts

