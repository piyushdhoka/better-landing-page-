import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'

type Testimonial = {
    name: string
    role: string
    image: string
    quote: string
}

const testimonials: Testimonial[] = [
    {
        name: 'Jonathan Yombo',
        role: 'Software Engineer',
        image: 'https://unavatar.io/x/jonyombo',
        quote: 'Better Logs is really extraordinary and very practical, no need to break your head. A real gold mine.',
    },
    {
        name: 'Yves Kalume',
        role: 'GDE - Android',
        image: 'https://unavatar.io/x/yveskalume',
        quote: 'With no experience in observability I just debugged my entire agent in a few minutes thanks to Better Logs.',
    },
    {
        name: 'Yucel Faruksahan',
        role: 'Creator',
        image: 'https://unavatar.io/x/yucelfaruk',
        quote: 'Great work on this platform. This is one of the best AI observability tools that I have seen so far :)',
    },
    {
        name: 'Anonymous author',
        role: 'Developer',
        image: 'https://unavatar.io/github/ghost',
        quote: 'I am really new to agent development and I want to give a go to make some on my own. I searched a lot of tools online. Better Logs is very clear to understand at the start.',
    },
    {
        name: 'Shekinah Tshiokufila',
        role: 'Senior Software Engineer',
        image: 'https://unavatar.io/x/shekinah',
        quote: 'Better Logs is redefining the standard of AI debugging, it provides an easy and efficient way for those who love clarity but may lack the time to implement it.',
    },
    {
        name: 'Oketa Fred',
        role: 'Fullstack Developer',
        image: 'https://unavatar.io/x/oketa',
        quote: 'I absolutely love Better Logs! The tracing views are beautifully designed and easy to use, which makes debugging a breeze.',
    },
    {
        name: 'Zeki',
        role: 'Founder of ChatExtend',
        image: 'https://unavatar.io/x/zeki',
        quote: "Using Better Logs has been like unlocking a secret superpower. It's the perfect fusion of simplicity and versatility.",
    },
    {
        name: 'Joseph Kitheka',
        role: 'Fullstack Developer',
        image: 'https://unavatar.io/x/joseph',
        quote: 'Better Logs has transformed the way I develop AI applications. Their extensive analytics have significantly accelerated my workflow.',
    },
    {
        name: 'Khatab Wedaa',
        role: 'Creator',
        image: 'https://unavatar.io/x/khatab',
        quote: "Better Logs is an elegant, clean, and fast platform. It's very helpful to start fast with your project.",
    },
    {
        name: 'Rodrigo Aguilar',
        role: 'Creator',
        image: 'https://unavatar.io/x/rodrigo',
        quote: 'I love Better Logs ❤️. The tracing blocks are well-structured, simple to use, and beautifully designed.',
    },
    {
        name: 'Eric Ampire',
        role: 'Mobile Engineer',
        image: 'https://unavatar.io/x/eric',
        quote: 'Better Logs is the perfect solution for anyone who wants to monitor agents without headache. The support team is always available to help.',
    },
    {
        name: 'Roland Tubonge',
        role: 'Software Engineer',
        image: 'https://unavatar.io/x/roland',
        quote: 'Better Logs is so well designed that even with poor knowledge of tracing you can do miracles. Let yourself be seduced!',
    },
]

const chunkArray = (array: Testimonial[], chunkSize: number): Testimonial[][] => {
    const result: Testimonial[][] = []
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize))
    }
    return result
}

const testimonialChunks = chunkArray(testimonials, Math.ceil(testimonials.length / 3))

export function TestimonialsSection() {
    return (
        <section className="relative py-24 sm:py-32" id="testimonials" style={{ backgroundColor: "#FFFFFF" }}>
            <div className="mx-auto max-w-6xl px-6">
                <div className="text-center mb-16">
                    <span className="font-pixel text-[10px] tracking-[0.2em] text-black uppercase mb-4 inline-block">Testimonials</span>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mt-2">Loved by the Community</h2>
                    <p className="text-sm text-black font-pixel uppercase tracking-wider mt-4 mx-auto max-w-2xl">Discover how teams are shipping reliable AI agents.</p>
                </div>
                <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
                    {testimonialChunks.map((chunk, chunkIndex) => (
                        <div
                            key={chunkIndex}
                            className="space-y-3">
                            {chunk.map(({ name, role, quote, image }, index) => (
                                <div key={index}>
                                    <Card className="bg-white border border-gray-200 shadow-none rounded-xl h-full">
                                        <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6 pb-6 px-6">
                                            <Avatar className="size-10 border border-gray-100">
                                                <AvatarImage
                                                    alt={name}
                                                    src={image}
                                                    loading="lazy"
                                                    width={120}
                                                    height={120}
                                                />
                                                <AvatarFallback className="bg-gray-50 text-black">{name.substring(0, 2).toUpperCase()}</AvatarFallback>
                                            </Avatar>

                                            <div>
                                                <h3 className="font-semibold text-black">{name}</h3>
                                                <span className="text-black block text-[10px] tracking-wider uppercase font-pixel mt-1 mb-2">{role}</span>

                                                <blockquote className="mt-3">
                                                    <p className="text-black leading-relaxed text-xs font-mono tracking-tight">&ldquo;{quote}&rdquo;</p>
                                                </blockquote>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
