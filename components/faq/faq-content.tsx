"use client"

import { useLanguage } from "@/components/language-provider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const faqData = {
  general: [
    {
      question: {
        en: "What is the difference between Hajj and Umrah?",
        id: "Apa perbedaan antara Haji dan Umrah?",
      },
      answer: {
        en: "Hajj is the annual Islamic pilgrimage to Makkah and is mandatory for Muslims to perform at least once in their lifetime if they are physically and financially able. It takes place during specific days in the Islamic month of Dhul Hijjah. Umrah, on the other hand, is a non-mandatory pilgrimage that can be performed at any time of the year.",
        id: "Haji adalah ibadah tahunan umat Islam ke Makkah dan wajib dilakukan oleh Muslim setidaknya sekali seumur hidup jika mereka mampu secara fisik dan finansial. Haji dilaksanakan pada hari-hari tertentu di bulan Islam Dzulhijjah. Sedangkan Umrah adalah ibadah yang tidak wajib dan dapat dilakukan kapan saja sepanjang tahun.",
      },
    },
    {
      question: {
        en: "How far in advance should I book my Hajj or Umrah package?",
        id: "Berapa lama sebelumnya saya harus memesan paket Haji atau Umrah?",
      },
      answer: {
        en: "For Hajj, we recommend booking at least 8-12 months in advance as spots fill up quickly and there are limited quotas for each country. For Umrah, booking 2-3 months ahead is usually sufficient, though during peak seasons (such as Ramadan), earlier booking is advisable.",
        id: "Untuk Haji, kami menyarankan pemesanan setidaknya 8-12 bulan sebelumnya karena tempat cepat terisi dan ada kuota terbatas untuk setiap negara. Untuk Umrah, pemesanan 2-3 bulan sebelumnya biasanya cukup, meskipun selama musim puncak (seperti Ramadhan), pemesanan lebih awal disarankan.",
      },
    },
    {
      question: {
        en: "What is included in your Hajj and Umrah packages?",
        id: "Apa saja yang termasuk dalam paket Haji dan Umrah Anda?",
      },
      answer: {
        en: "Our packages typically include accommodation, transportation (including flights), visa processing, guidance through all rituals by experienced guides, meals, and Ziyarat (visits to historical sites). The specific inclusions vary by package type, so please check the details of each package.",
        id: "Paket kami biasanya mencakup akomodasi, transportasi (termasuk penerbangan), pemrosesan visa, bimbingan melalui semua ritual oleh pemandu berpengalaman, makanan, dan Ziarah (kunjungan ke situs-situs bersejarah). Rincian spesifik bervariasi menurut jenis paket, jadi silakan periksa detail setiap paket.",
      },
    },
  ],
  visa: [
    {
      question: {
        en: "What are the visa requirements for Hajj and Umrah?",
        id: "Apa saja persyaratan visa untuk Haji dan Umrah?",
      },
      answer: {
        en: "Hajj and Umrah visas are special visas issued specifically for pilgrimage purposes. Requirements include a valid passport with at least 6 months validity, completed application forms, passport-sized photographs, proof of vaccination, and booking confirmation through licensed travel agencies. Women under 45 years old must be accompanied by a Mahram (male guardian).",
        id: "Visa Haji dan Umrah adalah visa khusus yang dikeluarkan khusus untuk tujuan ibadah. Persyaratan termasuk paspor yang berlaku minimal 6 bulan, formulir aplikasi yang sudah diisi, foto ukuran paspor, bukti vaksinasi, dan konfirmasi pemesanan melalui agen perjalanan berlisensi. Wanita di bawah 45 tahun harus ditemani oleh Mahram (wali laki-laki).",
      },
    },
    {
      question: {
        en: "How long does it take to process a Hajj or Umrah visa?",
        id: "Berapa lama waktu untuk memproses visa Haji atau Umrah?",
      },
      answer: {
        en: "Visa processing typically takes 7-10 working days for Umrah and 2-4 weeks for Hajj. However, during peak seasons, it may take longer. We recommend submitting your visa application well in advance to avoid any delays.",
        id: "Pemrosesan visa biasanya membutuhkan waktu 7-10 hari kerja untuk Umrah dan 2-4 minggu untuk Haji. Namun, selama musim puncak, mungkin membutuhkan waktu lebih lama. Kami menyarankan untuk mengajukan aplikasi visa jauh-jauh hari untuk menghindari keterlambatan.",
      },
    },
    {
      question: {
        en: "Can I extend my stay after Hajj or Umrah?",
        id: "Bisakah saya memperpanjang masa tinggal setelah Haji atau Umrah?",
      },
      answer: {
        en: "Hajj and Umrah visas are specific to the pilgrimage and have a limited validity period. Extensions are generally not possible. If you wish to stay longer in Saudi Arabia, you would need to return to your home country and apply for a different type of visa.",
        id: "Visa Haji dan Umrah khusus untuk ibadah dan memiliki masa berlaku terbatas. Perpanjangan umumnya tidak mungkin dilakukan. Jika Anda ingin tinggal lebih lama di Arab Saudi, Anda perlu kembali ke negara asal dan mengajukan visa jenis lain.",
      },
    },
  ],
  accommodation: [
    {
      question: {
        en: "How close are the hotels to the Haram in Makkah and Madinah?",
        id: "Seberapa dekat hotel dengan Haram di Makkah dan Madinah?",
      },
      answer: {
        en: "The proximity of hotels to the Haram varies by package. Our premium packages typically include accommodations within 500 meters of the Haram in both Makkah and Madinah. Standard packages usually have hotels within 1-2 kilometers, while economy packages may be 2-3 kilometers away. All packages include regular shuttle services to and from the Haram.",
        id: "Kedekatan hotel dengan Haram bervariasi menurut paket. Paket premium kami biasanya mencakup akomodasi dalam jarak 500 meter dari Haram baik di Makkah maupun Madinah. Paket standar biasanya memiliki hotel dalam jarak 1-2 kilometer, sementara paket ekonomi mungkin berjarak 2-3 kilometer. Semua paket termasuk layanan antar-jemput reguler ke dan dari Haram.",
      },
    },
    {
      question: {
        en: "What type of rooms are provided in the hotels?",
        id: "Jenis kamar apa yang disediakan di hotel?",
      },
      answer: {
        en: "We offer various room configurations to suit different needs. Standard options include double, triple, and quad rooms. Premium packages may offer single room options at an additional cost. All rooms come with private bathrooms, air conditioning, and basic amenities. The quality and size of rooms will vary based on the hotel rating and package selected.",
        id: "Kami menawarkan berbagai konfigurasi kamar untuk memenuhi kebutuhan yang berbeda. Pilihan standar termasuk kamar double, triple, dan quad. Paket premium mungkin menawarkan opsi kamar single dengan biaya tambahan. Semua kamar dilengkapi dengan kamar mandi pribadi, AC, dan fasilitas dasar. Kualitas dan ukuran kamar akan bervariasi berdasarkan peringkat hotel dan paket yang dipilih.",
      },
    },
    {
      question: {
        en: "Is food included in the packages?",
        id: "Apakah makanan termasuk dalam paket?",
      },
      answer: {
        en: "Yes, all our packages include daily meals (breakfast, lunch, and dinner). The quality and variety of food will depend on the package type. Premium packages offer a wider range of cuisines including international options, while standard and economy packages provide nutritious meals with some local and international choices. Special dietary requirements can be accommodated with advance notice.",
        id: "Ya, semua paket kami termasuk makanan harian (sarapan, makan siang, dan makan malam). Kualitas dan variasi makanan akan tergantung pada jenis paket. Paket premium menawarkan berbagai masakan termasuk pilihan internasional, sementara paket standar dan ekonomi menyediakan makanan bergizi dengan beberapa pilihan lokal dan internasional. Kebutuhan diet khusus dapat diakomodasi dengan pemberitahuan sebelumnya.",
      },
    },
  ],
  travel: [
    {
      question: {
        en: "What airlines do you use for Hajj and Umrah packages?",
        id: "Maskapai penerbangan apa yang Anda gunakan untuk paket Haji dan Umrah?",
      },
      answer: {
        en: "We partner with reputable airlines including Saudia (Saudi Arabian Airlines), Emirates, Qatar Airways, and Garuda Indonesia. The specific airline for your journey will depend on your package type and departure city. Premium packages typically include flights with premium carriers, while economy packages may use standard carriers with possible transits.",
        id: "Kami bermitra dengan maskapai terkemuka termasuk Saudia (Saudi Arabian Airlines), Emirates, Qatar Airways, dan Garuda Indonesia. Maskapai penerbangan spesifik untuk perjalanan Anda akan tergantung pada jenis paket dan kota keberangkatan. Paket premium biasanya termasuk penerbangan dengan maskapai premium, sementara paket ekonomi mungkin menggunakan maskapai standar dengan kemungkinan transit.",
      },
    },
    {
      question: {
        en: "What is the baggage allowance for Hajj and Umrah trips?",
        id: "Berapa berat bagasi yang diperbolehkan untuk perjalanan Haji dan Umrah?",
      },
      answer: {
        en: "Baggage allowance varies by airline and package type. Typically, economy packages include 20-23kg checked baggage and 7kg carry-on. Premium packages may offer up to 30kg checked baggage. We will provide specific baggage information based on your chosen package and airline. Remember to leave room for Zamzam water and souvenirs on your return journey.",
        id: "Batas bagasi bervariasi menurut maskapai dan jenis paket. Biasanya, paket ekonomi termasuk bagasi 20-23kg dan 7kg bagasi kabin. Paket premium mungkin menawarkan hingga 30kg bagasi. Kami akan memberikan informasi bagasi spesifik berdasarkan paket dan maskapai yang Anda pilih. Ingatlah untuk menyisakan ruang untuk air Zamzam dan oleh-oleh pada perjalanan pulang Anda.",
      },
    },
    {
      question: {
        en: "What transportation is provided within Saudi Arabia?",
        id: "Transportasi apa yang disediakan di dalam Arab Saudi?",
      },
      answer: {
        en: "All packages include airport transfers and transportation between Makkah, Madinah, and other holy sites. Premium packages feature private or smaller group buses with more comfort, while standard and economy packages use standard coaches shared with other pilgrims. During the Hajj rituals, government-provided transportation is used for moving between different sites.",
        id: "Semua paket termasuk penjemputan bandara dan transportasi antara Makkah, Madinah, dan situs suci lainnya. Paket premium menawarkan bus pribadi atau kelompok yang lebih kecil dengan kenyamanan lebih, sementara paket standar dan ekonomi menggunakan bus standar yang dibagi dengan jamaah lain. Selama ritual Haji, transportasi yang disediakan pemerintah digunakan untuk berpindah antara situs yang berbeda.",
      },
    },
  ],
  health: [
    {
      question: {
        en: "What vaccinations are required for Hajj and Umrah?",
        id: "Vaksinasi apa yang diperlukan untuk Haji dan Umrah?",
      },
      answer: {
        en: "The Saudi government requires all pilgrims to have the Meningococcal Meningitis vaccine (ACYW135) at least 10 days before arrival. Other recommended vaccines include seasonal influenza, pneumococcal, and updated COVID-19 vaccinations as per current regulations. Vaccination requirements may change, so we always provide updated information closer to your departure date.",
        id: "Pemerintah Saudi mewajibkan semua jamaah untuk memiliki vaksin Meningitis Meningokokus (ACYW135) setidaknya 10 hari sebelum kedatangan. Vaksin lain yang direkomendasikan termasuk influenza musiman, pneumokokus, dan vaksinasi COVID-19 terbaru sesuai dengan peraturan saat ini. Persyaratan vaksinasi dapat berubah, jadi kami selalu memberikan informasi terbaru mendekati tanggal keberangkatan Anda.",
      },
    },
    {
      question: {
        en: "Is medical insurance included in your packages?",
        id: "Apakah asuransi kesehatan termasuk dalam paket Anda?",
      },
      answer: {
        en: "Yes, all our packages include basic medical insurance that covers emergency medical treatment in Saudi Arabia. However, we strongly recommend purchasing additional comprehensive travel insurance that covers trip cancellation, lost baggage, and more extensive medical coverage. We can assist you in finding suitable travel insurance options.",
        id: "Ya, semua paket kami termasuk asuransi kesehatan dasar yang mencakup perawatan medis darurat di Arab Saudi. Namun, kami sangat menyarankan untuk membeli asuransi perjalanan komprehensif tambahan yang mencakup pembatalan perjalanan, kehilangan bagasi, dan cakupan medis yang lebih luas. Kami dapat membantu Anda dalam menemukan pilihan asuransi perjalanan yang sesuai.",
      },
    },
    {
      question: {
        en: "What medical facilities are available during Hajj and Umrah?",
        id: "Fasilitas medis apa yang tersedia selama Haji dan Umrah?",
      },
      answer: {
        en: "Saudi Arabia provides excellent medical facilities for pilgrims. There are numerous health centers and hospitals around the holy sites in Makkah and Madinah. Our packages include the services of a medical professional who travels with the group. For serious conditions, pilgrims can access Saudi Arabian hospitals which are well-equipped to handle emergencies.",
        id: "Arab Saudi menyediakan fasilitas medis yang sangat baik untuk jamaah. Ada banyak pusat kesehatan dan rumah sakit di sekitar situs suci di Makkah dan Madinah. Paket kami termasuk layanan profesional medis yang bepergian dengan kelompok. Untuk kondisi serius, jamaah dapat mengakses rumah sakit Saudi Arabia yang dilengkapi dengan baik untuk menangani keadaan darurat.",
      },
    },
  ],
}

const FaqContent = () => {
  const { language } = useLanguage()

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4">
        <Tabs defaultValue="general" className="w-full">
          <div className="flex justify-center mb-10">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2">
              <TabsTrigger value="general">{language === "en" ? "General" : "Umum"}</TabsTrigger>
              <TabsTrigger value="visa">{language === "en" ? "Visa" : "Visa"}</TabsTrigger>
              <TabsTrigger value="accommodation">{language === "en" ? "Accommodation" : "Akomodasi"}</TabsTrigger>
              <TabsTrigger value="travel">{language === "en" ? "Travel" : "Perjalanan"}</TabsTrigger>
              <TabsTrigger value="health">{language === "en" ? "Health" : "Kesehatan"}</TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(faqData).map(([category, questions]) => (
            <TabsContent key={category} value={category} className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {questions.map((faq, index) => (
                  <AccordionItem key={index} value={`${category}-item-${index}`}>
                    <AccordionTrigger className="text-left font-caviar-dreams text-lg font-semibold">
                      {faq.question[language]}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base">
                      {faq.answer[language]}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

export default FaqContent

