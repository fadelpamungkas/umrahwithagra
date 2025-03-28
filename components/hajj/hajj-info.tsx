"use client"

import { useLanguage } from "@/components/language-provider"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const HajjInfo = () => {
  const { language } = useLanguage()

  const hajjDays = [
    {
      day: "1",
      title: {
        en: "Day of Tarwiyah (8th Dhul-Hijjah)",
        id: "Hari Tarwiyah (8 Dzulhijjah)",
      },
      description: {
        en: "Pilgrims enter into a state of Ihram, make their intention for Hajj, and proceed to Mina where they spend the day and night in prayer and reflection.",
        id: "Jamaah masuk ke dalam keadaan Ihram, membuat niat untuk Haji, dan melanjutkan ke Mina di mana mereka menghabiskan hari dan malam dalam doa dan refleksi.",
      },
    },
    {
      day: "2",
      title: {
        en: "Day of Arafah (9th Dhul-Hijjah)",
        id: "Hari Arafah (9 Dzulhijjah)",
      },
      description: {
        en: "The most important day of Hajj. Pilgrims spend the day standing in prayer on the plain of Arafah, seeking Allah's forgiveness. After sunset, they proceed to Muzdalifah for the night.",
        id: "Hari terpenting Haji. Jamaah menghabiskan hari berdiri dalam doa di padang Arafah, memohon pengampunan Allah. Setelah matahari terbenam, mereka melanjutkan ke Muzdalifah untuk bermalam.",
      },
    },
    {
      day: "3",
      title: {
        en: "Day of Eid (10th Dhul-Hijjah)",
        id: "Hari Raya (10 Dzulhijjah)",
      },
      description: {
        en: "Pilgrims proceed to Jamarat and stone the large Jamrah, symbolizing the rejection of evil. They then perform the sacrifice, shave or trim their hair, and perform Tawaf and Sa'i.",
        id: "Jamaah melanjutkan ke Jamarat dan melempari Jamrah besar, melambangkan penolakan kejahatan. Mereka kemudian melakukan kurban, mencukur atau memotong rambut mereka, dan melakukan Tawaf dan Sa'i.",
      },
    },
    {
      day: "4-5",
      title: {
        en: "Days of Tashriq (11th-12th Dhul-Hijjah)",
        id: "Hari Tasyriq (11-12 Dzulhijjah)",
      },
      description: {
        en: "Pilgrims stay in Mina and stone all three Jamarat each day. After completing the stoning on the 12th (or 13th for those who stay an extra day), they perform the Farewell Tawaf in Makkah.",
        id: "Jamaah tinggal di Mina dan melempari ketiga Jamarat setiap hari. Setelah menyelesaikan pelemparan pada tanggal 12 (atau 13 bagi yang tinggal satu hari tambahan), mereka melakukan Tawaf Wada di Makkah.",
      },
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="container px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            {language === "en" ? "The Journey of Hajj" : "Perjalanan Haji"}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language === "en"
              ? "Understanding the rituals and significance of each day of the sacred pilgrimage"
              : "Memahami ritual dan arti penting setiap hari dari ibadah suci"}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
              <Image src="/images/hajj-journey.jpg" alt="Hajj Journey" fill className="object-cover" />
            </div>
          </div>

          <div>
            <Tabs defaultValue="1" className="w-full">
              <TabsList className="grid grid-cols-4 mb-6 bg-gray-200">
                {hajjDays.map((day) => (
                  <TabsTrigger key={day.day} value={day.day}>
                    {language === "en" ? `Day ${day.day}` : `Hari ${day.day}`}
                  </TabsTrigger>
                ))}
              </TabsList>
              {hajjDays.map((day) => (
                <TabsContent key={day.day} value={day.day} className="space-y-4">
                  <h3 className="font-caviar-dreams text-xl font-bold">{day.title[language]}</h3>
                  <p className="text-muted-foreground">{day.description[language]}</p>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HajjInfo

