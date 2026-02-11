import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
    DollarSign,
    TrendingUp,
    Cpu,
    Zap,
    Shield,
    Wrench,
    MapPin,
    Phone,
    Mail,
    ChevronRight,
    Monitor,
    BatteryCharging,
    ArrowRight,
    CheckCircle2,
    Star,
    Eye,
    Wallet,
    MonitorPlay,
    ShieldCheck,
} from 'lucide-react'

/* ───────────────────────────── helpers ───────────────────────────── */

function Section({ children, className = '', id }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })
    return (
        <motion.section
            ref={ref}
            id={id}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className={className}
        >
            {children}
        </motion.section>
    )
}

function FadeIn({ children, delay = 0, className = '' }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-40px' })
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay, ease: 'easeOut' }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

/* ───────────────────────────── navbar ───────────────────────────── */

function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-tektron-dark/80 backdrop-blur-xl border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-tauste-red flex items-center justify-center">
                        <Monitor className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg font-bold tracking-tight">
                        <span className="text-white">Tektron</span>
                        <span className="text-gray-warm mx-2">×</span>
                        <span className="text-tauste-red">Tauste</span>
                    </span>
                </div>
                <a
                    href="#contato"
                    className="hidden sm:flex items-center gap-2 bg-tauste-red hover:bg-tauste-red-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 btn-shine"
                >
                    Fale Conosco
                    <ChevronRight className="w-4 h-4" />
                </a>
            </div>
        </nav>
    )
}

/* ───────────────────────────── hero ────────────────────────────── */

function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background layers */}
            <div className="absolute inset-0 bg-tektron-dark" />
            <div className="absolute inset-0 grid-pattern" />
            <div className="absolute inset-0 hero-gradient" />

            {/* Decorative elements */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-tauste-red/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-tauste-red/3 rounded-full blur-3xl" />

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 bg-tauste-red/10 border border-tauste-red/20 rounded-full px-4 py-1.5 mb-8"
                >
                    <div className="w-2 h-2 rounded-full bg-tauste-red animate-pulse" />
                    <span className="text-sm font-medium text-tauste-red">Proposta Exclusiva — Tauste Supermercados</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6"
                >
                    Transformando o{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-tauste-red to-red-400">
                        espaço ocioso
                    </span>
                    <br />
                    em renda.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
                >
                    Uma parceria estratégica para transformar a esquina da{' '}
                    <span className="text-white font-semibold">Capitão Gomes Duarte × Rio Branco</span>{' '}
                    em um ponto de alto impacto digital.{' '}
                    <span className="text-tauste-red font-semibold">Investimento Tektron. Exclusividade Tauste.</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#proposta"
                        className="group flex items-center gap-3 bg-tauste-red hover:bg-tauste-red-dark text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-tauste-red/25 hover:shadow-tauste-red/40 btn-shine"
                    >
                        Conhecer a Proposta
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="#contato"
                        className="flex items-center gap-2 text-gray-400 hover:text-white font-medium text-lg transition-colors"
                    >
                        <Phone className="w-5 h-5" />
                        Falar com Gabriela
                    </a>
                </motion.div>

                {/* Stats bar */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
                >
                    {[
                        { value: '0', label: 'Investimento do Tauste', suffix: 'R$' },
                        { value: '24/7', label: 'Operação contínua' },
                        { value: '100%', label: 'Custos cobertos pela Tektron' },
                        { value: '360°', label: 'Visibilidade de esquina' },
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-2xl md:text-3xl font-extrabold text-white">
                                {stat.suffix && <span className="text-tauste-red text-lg">{stat.suffix}</span>}
                                {stat.value}
                            </div>
                            <div className="text-xs md:text-sm text-gray-500 mt-1">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-tektron-dark to-transparent" />
        </section>
    )
}

/* ──────────────────────── value proposition ──────────────────────── */

const cards = [
    {
        icon: DollarSign,
        title: 'Zero Investimento',
        subtitle: 'Sem custo. Sem risco.',
        description:
            'A Tektron arca com 100% dos custos de instalação, energia elétrica independente e manutenção contínua. O Tauste não investe um centavo — apenas disponibiliza o espaço.',
        highlights: ['Instalação gratuita', 'Energia independente', 'Manutenção inclusa'],
    },
    {
        icon: TrendingUp,
        title: 'Renda Extra Passiva',
        subtitle: 'Seu espaço gerando receita.',
        description:
            'Transforme metros quadrados ociosos em uma fonte de receita recorrente. A fachada do Tauste passa a gerar valor sem nenhum esforço operacional.',
        highlights: ['Receita recorrente', 'Sem esforço operacional', 'Valorização do imóvel'],
    },
    {
        icon: Cpu,
        title: 'Diferencial Tecnológico',
        subtitle: 'À frente da concorrência.',
        description:
            'Um painel LED de alta resolução na esquina mais movimentada da região posiciona o Tauste como referência em inovação.',
        highlights: ['Alta resolução LED', 'Imagem premium', 'Exclusividade'],
    },
]

function ValueProposition() {
    return (
        <Section id="proposta" className="py-24 md:py-32 relative">
            <div className="max-w-7xl mx-auto px-6">
                <FadeIn className="text-center mb-16">
                    <span className="text-tauste-red font-semibold text-sm tracking-widest uppercase">
                        Por que aceitar esta proposta
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-6">
                        Vantagens para o{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-tauste-red to-red-400">
                            Tauste
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Uma oportunidade única de monetizar o espaço sem qualquer investimento ou responsabilidade operacional.
                    </p>
                </FadeIn>

                <div className="grid md:grid-cols-3 gap-6">
                    {cards.map((card, i) => (
                        <FadeIn key={i} delay={i * 0.15}>
                            <div className="glass-card rounded-2xl p-8 h-full transition-all duration-500 hover:-translate-y-2 group">
                                <div className="w-14 h-14 rounded-xl bg-tauste-red/10 border border-tauste-red/20 flex items-center justify-center mb-6 group-hover:bg-tauste-red/20 transition-colors">
                                    <card.icon className="w-7 h-7 text-tauste-red" />
                                </div>

                                <h3 className="text-xl font-bold mb-1">{card.title}</h3>
                                <p className="text-tauste-red text-sm font-medium mb-4">{card.subtitle}</p>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">{card.description}</p>

                                <ul className="space-y-2">
                                    {card.highlights.map((item, j) => (
                                        <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                                            <CheckCircle2 className="w-4 h-4 text-tauste-red flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </Section>
    )
}

/* ──────────────────────── technical specs ──────────────────────── */

function TechnicalSpecs() {
    return (
        <Section id="estrutura" className="py-24 md:py-32 relative">
            <div className="section-divider mx-auto max-w-4xl mb-24" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left: text */}
                    <FadeIn>
                        <span className="text-tauste-red font-semibold text-sm tracking-widest uppercase">
                            Estrutura & Tecnologia
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold mt-4 mb-6">
                            Painel LED de alta performance com{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-tauste-red to-red-400">
                                energia independente
                            </span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            Toda a estrutura é projetada, instalada e mantida integralmente pela Tektron.
                            O sistema opera com alimentação elétrica própria — sem impacto na conta de luz do Tauste.
                        </p>

                        <div className="space-y-5">
                            {[
                                {
                                    icon: Monitor,
                                    title: 'Painel LED Full-Color',
                                    desc: 'Display de alta resolução com brilho ajustável, visível em qualquer condição de luz — dia ou noite.',
                                },
                                {
                                    icon: BatteryCharging,
                                    title: 'Energia 100% Independente',
                                    desc: 'Alimentação elétrica dedicada, instalada e custeada pela Tektron. Custo zero para o Tauste.',
                                },
                                {
                                    icon: Wrench,
                                    title: 'Manutenção Preventiva',
                                    desc: 'Equipe técnica Tektron responsável por toda manutenção, suporte e atualização do equipamento.',
                                },
                                {
                                    icon: Shield,
                                    title: 'Seguro & Conformidade',
                                    desc: 'Instalação com engenharia certificada, alvará e seguro contra danos — toda responsabilidade é da Tektron.',
                                },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 group">
                                    <div className="w-11 h-11 rounded-lg bg-tektron-card border border-tektron-border flex items-center justify-center flex-shrink-0 group-hover:border-tauste-red/30 transition-colors">
                                        <item.icon className="w-5 h-5 text-tauste-red" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                                        <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </FadeIn>

                    {/* Right: visual */}
                    <FadeIn delay={0.2}>
                        <div className="relative">
                            {/* Glow behind */}
                            <div className="absolute inset-0 bg-tauste-red/10 rounded-3xl blur-3xl scale-90" />

                            <div className="relative glass-card rounded-3xl p-8 red-glow">
                                {/* LED panel mockup */}
                                <div className="bg-tektron-dark rounded-2xl border border-tektron-border p-6 mb-6">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-xs text-gray-500 font-mono">PAINEL ATIVO — OPERANDO</span>
                                    </div>
                                    <div className="aspect-video rounded-xl bg-gradient-to-br from-tauste-red/20 via-tektron-dark to-tauste-red/10 border border-tauste-red/20 flex items-center justify-center relative overflow-hidden">
                                        <div className="absolute inset-0 grid-pattern opacity-30" />
                                        <div className="text-center relative z-10">
                                            <Monitor className="w-16 h-16 text-tauste-red/60 mx-auto mb-3" />
                                            <p className="text-sm font-semibold text-white">Painel LED 4×2m</p>
                                            <p className="text-xs text-gray-500">Full-Color • P5 Outdoor</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Specs grid */}
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        { label: 'Resolução', value: 'P5 Outdoor' },
                                        { label: 'Sistema', value: 'Criado e mantido pela Tektron' },
                                        { label: 'Operação', value: '24 horas' },
                                        { label: 'Energia', value: 'Independente' },
                                    ].map((spec, i) => (
                                        <div
                                            key={i}
                                            className="bg-tektron-dark/80 rounded-xl p-3 border border-tektron-border text-center"
                                        >
                                            <div className="text-xs text-gray-500 mb-1">{spec.label}</div>
                                            <div className="text-sm font-bold text-white">{spec.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </Section>
    )
}

/* ─────────────────────── benefícios concretos ─────────────────────── */

const benefits = [
    {
        icon: Wallet,
        title: 'Monetização do Espaço',
        desc: 'Transformamos uma área ociosa da fachada em receita recorrente imediata através de aluguel do espaço.',
    },
    {
        icon: MonitorPlay,
        title: 'Canal de Mídia Exclusivo',
        desc: 'Nenhuma empresa do mesmo segmento será anunciada no painel. O Tauste poderá avaliar a possibilidade de realizar uma proposta para veiculação de ofertas e promoções a qualquer momento.',
    },
    {
        icon: ShieldCheck,
        title: 'Zero Dor de Cabeça',
        desc: 'Licenças, prefeitura, elétrica, manutenção e criação de arte para terceiros: tudo por conta da Tektron.',
    },
]

function LocationSection() {
    return (
        <Section className="py-24 md:py-32 relative">
            <div className="section-divider mx-auto max-w-4xl mb-24" />
            <div className="max-w-6xl mx-auto px-6">
                <FadeIn className="text-center mb-16">
                    <span className="text-tauste-red font-semibold text-sm tracking-widest uppercase">
                        O que o Tauste ganha
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-6">
                        Benefícios{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-tauste-red to-red-400">
                            concretos
                        </span>{' '}
                        e imediatos
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Veja exatamente o que a parceria entrega ao Tauste desde o primeiro dia.
                    </p>
                </FadeIn>

                <div className="grid md:grid-cols-3 gap-8">
                    {benefits.map((item, i) => (
                        <FadeIn key={i} delay={i * 0.12}>
                            <div className="bg-tektron-card p-6 rounded-xl border border-tektron-border hover:border-tauste-red transition-colors duration-300">
                                <div className="bg-tektron-dark w-16 h-16 rounded-full flex items-center justify-center mb-6 border border-tektron-border">
                                    <item.icon className="w-8 h-8 text-tauste-red" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-gray-warm">{item.desc}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </Section>
    )
}
/* ────────────────── espaço desperdiçado (casual) ──────────────────── */

function WastedSpace() {
    return (
        <Section className="py-20 md:py-28 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    {/* Left: image with annotations */}
                    <FadeIn>
                        <div className="relative">
                            {/* Image placeholder — replace src with your local image */}
                            <div className="relative rounded-2xl overflow-hidden border-2 border-dashed border-gray-700 group">
                                <img
                                    src="/local-vazio.jpg"
                                    alt="Espaço vazio na esquina do Tauste"
                                    className="w-full aspect-[4/3] object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500"
                                    onError={(e) => {
                                        e.target.style.display = 'none'
                                        e.target.nextSibling.style.display = 'flex'
                                    }}
                                />
                                {/* Fallback if image not found */}
                                <div className="w-full aspect-[4/3] bg-tektron-card items-center justify-center hidden">
                                    <div className="text-center">
                                        <MapPin className="w-12 h-12 text-gray-600 mx-auto mb-3" />
                                        <p className="text-gray-500 text-sm">Adicione a foto do local em</p>
                                        <code className="text-xs text-tauste-red">/public/local-vazio.jpg</code>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Right: persuasive copy */}
                    <FadeIn delay={0.2}>
                        <div>
                            <motion.div
                                className="inline-block bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold px-3 py-1 rounded-full mb-6 tracking-wider uppercase"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                ⚡ Oportunidade real
                            </motion.div>

                            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">
                                Essa esquina{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-tauste-red">
                                    já poderia estar
                                </span>
                                <br />
                                gerando receita.
                            </h2>

                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                Enquanto essa fachada continua vazia, o espaço perde valor todo dia.
                                Um painel LED transforma esse cenário em algo que{' '}
                                <span className="text-white font-semibold">atrai olhares, gera receita</span>{' '}
                                e posiciona o Tauste como referência na região.
                            </p>

                            <div className="space-y-3">
                                {[
                                    'Chama atenção do público',
                                    'Posiciona o mercado como moderno e tecnológico',
                                    'Sem custo, sem obra, sem dor de cabeça',
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        className="flex items-center gap-3"
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 + i * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="w-6 h-6 rounded-full bg-tauste-red/20 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle2 className="w-4 h-4 text-tauste-red" />
                                        </div>
                                        <span className="text-gray-300 text-sm">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </Section>
    )
}

/* ───────────────────── galeria de exemplos ────────────────────── */

function ImageShowcase() {
    /* 
      Para adicionar suas imagens:
      1. Coloque os arquivos em /public/ (ex: exemplo-1.jpg, exemplo-2.jpg, etc.)
      2. Atualize os src abaixo com os nomes dos arquivos
    */
    const examples = [
        { src: '/exemplo-1.png', label: 'Exemplo de painel instalado' },
        { src: '/exemplo-2.png', label: 'Visão da Rio Branco' },
        { src: '/exemplo-3.png', label: 'Visão da Capitão Gomes Duarte' },
    ]

    return (
        <Section className="py-20 md:py-28 relative">
            <div className="section-divider mx-auto max-w-4xl mb-20" />
            <div className="max-w-6xl mx-auto px-6">
                <FadeIn className="text-center mb-14">
                    <span className="text-tauste-red font-semibold text-sm tracking-widest uppercase">
                        Portfólio
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold mt-4 mb-4">
                        Veja como fica na{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-tauste-red to-red-400">
                            prática
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-xl mx-auto">
                        Exemplos reais de painéis instalados pela Tektron em pontos estratégicos.
                    </p>
                </FadeIn>

                <div className="grid md:grid-cols-3 gap-6">
                    {examples.map((img, i) => (
                        <FadeIn key={i} delay={i * 0.12}>
                            <div className="group relative rounded-2xl overflow-hidden border border-tektron-border hover:border-tauste-red/40 transition-all duration-500">
                                <img
                                    src={img.src}
                                    alt={img.label}
                                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                                    onError={(e) => {
                                        e.target.style.display = 'none'
                                        e.target.nextSibling.style.display = 'flex'
                                    }}
                                />
                                {/* Fallback placeholder */}
                                <div className="w-full aspect-[4/3] bg-tektron-card items-center justify-center hidden">
                                    <div className="text-center px-4">
                                        <Monitor className="w-10 h-10 text-gray-600 mx-auto mb-2" />
                                        <p className="text-gray-500 text-xs">Adicione imagem em</p>
                                        <code className="text-xs text-tauste-red">/public{img.src}</code>
                                    </div>
                                </div>
                                {/* Label overlay */}
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-10">
                                    <p className="text-sm font-medium text-white">{img.label}</p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </Section>
    )
}

/* ──────────────────── persuasion / objections ─────────────────── */

function Persuasion() {
    return (
        <Section className="py-24 md:py-32 relative">
            <div className="section-divider mx-auto max-w-4xl mb-24" />
            <div className="max-w-4xl mx-auto px-6">
                <FadeIn className="text-center mb-16">
                    <span className="text-tauste-red font-semibold text-sm tracking-widest uppercase">
                        Perguntas Frequentes
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold mt-4 mb-6">
                        Por que essa parceria faz sentido para o{' '}
                        <span className="text-tauste-red">Tauste</span>?
                    </h2>
                </FadeIn>

                <div className="space-y-4">
                    {[
                        {
                            q: 'O Tauste precisa pagar alguma coisa?',
                            a: 'Não. Absolutamente zero. Toda a instalação, energia elétrica, manutenção e operação são de responsabilidade integral da Tektron.',
                        },
                        {
                            q: 'A instalação interfere na operação do supermercado?',
                            a: 'Não. A estrutura é fixada na área externa, sem qualquer alteração nos acessos, estacionamento ou fachada comercial do Tauste.',
                        },
                        {
                            q: 'A energia do painel vai aumentar a conta de luz?',
                            a: 'Não. O painel opera com alimentação elétrica 100% independente, instalada e custeada pela Tektron. Não há nenhum impacto na conta de energia do supermercado.',
                        },
                        {
                            q: 'Qual a vantagem competitiva para o Tauste?',
                            a: 'Nenhum concorrente na região terá essa tecnologia. O painel LED posiciona o Tauste como marca inovadora e ainda gera receita passiva com espaço que hoje está ocioso.',
                        },
                        {
                            q: 'E se o Tauste quiser encerrar a parceria?',
                            a: 'As condições de desinstalação são definidas em contrato de forma transparente. A Tektron se compromete a realizar a remoção completa sem custos para o Tauste.',
                        },
                    ].map((item, i) => (
                        <FadeIn key={i} delay={i * 0.08}>
                            <div className="glass-card rounded-2xl p-6 transition-all duration-300">
                                <h4 className="font-bold text-white mb-3 flex items-start gap-3">
                                    <span className="text-tauste-red font-extrabold text-lg mt-0.5">Q</span>
                                    {item.q}
                                </h4>
                                <p className="text-gray-400 text-sm leading-relaxed pl-8">{item.a}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </Section>
    )
}

/* ───────────────────────── contact / CTA ─────────────────────── */

function Contact() {
    return (
        <Section id="contato" className="py-24 md:py-32 relative">
            <div className="section-divider mx-auto max-w-4xl mb-24" />
            <div className="max-w-4xl mx-auto px-6 text-center">
                <FadeIn>
                    <span className="text-tauste-red font-semibold text-sm tracking-widest uppercase">
                        Vamos Conversar
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-6">
                        Pronto para{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-tauste-red to-red-400">
                            transformar
                        </span>{' '}
                        esse espaço?
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
                        Entre em contato com nosso representante para agendar uma apresentação presencial
                        e conhecer todos os detalhes da proposta.
                    </p>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <div className="glass-card rounded-3xl p-10 max-w-lg mx-auto red-glow">
                        <div className="w-20 h-20 rounded-full bg-tauste-red/10 border-2 border-tauste-red/30 flex items-center justify-center mx-auto mb-6">
                            <span className="text-3xl font-extrabold text-tauste-red">G</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-1">Gabriela</h3>
                        <p className="text-tauste-red font-medium mb-6">Tektron — Representante Comercial</p>

                        <div className="space-y-3 mb-8">
                            <div className="flex items-center justify-center gap-3 text-gray-300">
                                <Phone className="w-5 h-5 text-tauste-red" />
                                <span className="text-lg font-medium">(14) 99131-5000</span>
                            </div>
                        </div>

                        <a
                            href="https://wa.me/5514991315000?text=Ol%C3%A1%20Gabriela%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20proposta%20do%20painel%20LED%20Tektron%20para%20o%20Tauste."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-green-600/20 hover:shadow-green-600/40 btn-shine w-full justify-center"
                        >
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Chamar no WhatsApp
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </FadeIn>
            </div>
        </Section>
    )
}

/* ───────────────────────── footer ─────────────────────────────── */

function Footer() {
    return (
        <footer className="border-t border-white/5 py-8">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded bg-tauste-red flex items-center justify-center">
                        <Monitor className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-gray-500">
                        <span className="text-white font-semibold">Tektron</span> × Tauste — Proposta Comercial 2026
                    </span>
                </div>
                <p className="text-xs text-gray-600">
                    Documento confidencial. Exclusivo para Tauste Supermercados.
                </p>
            </div>
        </footer>
    )
}

/* ───────────────────────── main app ──────────────────────────── */

export default function App() {
    return (
        <div className="min-h-screen bg-tektron-dark text-white overflow-x-hidden">
            <Navbar />
            <Hero />
            <ValueProposition />
            <TechnicalSpecs />
            <LocationSection />
            <WastedSpace />
            <ImageShowcase />
            <Persuasion />
            <Contact />
            <Footer />
        </div>
    )
}
