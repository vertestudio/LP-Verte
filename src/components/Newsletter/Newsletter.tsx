import { useState } from 'react'
import './Newsletter.css'

interface FormData {
    nome: string
    email: string
    mensagem: string
}

interface FormErrors {
    nome?: string
    email?: string
    mensagem?: string
}

type Status = 'idle' | 'loading' | 'success' | 'error'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/SEU_ID_AQUI' // ← substitua pelo seu endpoint

function validateEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function validate(data: FormData): FormErrors {
    const errors: FormErrors = {}
    if (!data.nome.trim()) errors.nome = 'Nome é obrigatório.'
    if (!data.email.trim()) errors.email = 'E-mail é obrigatório.'
    else if (!validateEmail(data.email)) errors.email = 'Informe um e-mail válido.'
    if (!data.mensagem.trim()) errors.mensagem = 'Mensagem é obrigatória.'
    return errors
}

export default function Newsletter() {
    const [form, setForm] = useState<FormData>({ nome: '', email: '', mensagem: '' })
    const [errors, setErrors] = useState<FormErrors>({})
    const [status, setStatus] = useState<Status>('idle')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
        // limpa o erro do campo ao digitar
        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }))
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const validationErrors = validate(form)
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            return
        }

        setStatus('loading')

        try {
            const res = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify(form),
            })

            if (res.ok) {
                setStatus('success')
                setForm({ nome: '', email: '', mensagem: '' })
                setErrors({})
            } else {
                setStatus('error')
            }
        } catch {
            setStatus('error')
        }
    }

    return (
        <div id="contato" className="contato">
            <div className="contato__inner">

                <div className="contato__text reveal">
                    <p className="contato__label">Contato</p>
                    <h2>Fale com a Verte</h2>
                    <p>Tem uma dúvida, sugestão ou quer saber mais sobre nossos produtos? Escreva para nós — respondemos em até 1 dia útil.</p>
                </div>

                <div className="contato__form-wrap reveal">
                    {status === 'success' ? (
                        <div className="contato__success">
                            <span className="contato__success-icon">✓</span>
                            <p>Mensagem enviada! Entraremos em contato em breve.</p>
                            <button className="contato__reset" onClick={() => setStatus('idle')}>
                                Enviar outra mensagem
                            </button>
                        </div>
                    ) : (
                        <form className="contato__form" onSubmit={handleSubmit} noValidate>

                            <div className={`contato__field ${errors.nome ? 'contato__field--error' : ''}`}>
                                <label htmlFor="nome">Nome</label>
                                <input
                                    id="nome"
                                    name="nome"
                                    type="text"
                                    placeholder="Seu nome"
                                    value={form.nome}
                                    onChange={handleChange}
                                    autoComplete="name"
                                />
                                {errors.nome && <span className="contato__error">{errors.nome}</span>}
                            </div>

                            <div className={`contato__field ${errors.email ? 'contato__field--error' : ''}`}>
                                <label htmlFor="email">E-mail</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="seu@email.com"
                                    value={form.email}
                                    onChange={handleChange}
                                    autoComplete="email"
                                />
                                {errors.email && <span className="contato__error">{errors.email}</span>}
                            </div>

                            <div className={`contato__field ${errors.mensagem ? 'contato__field--error' : ''}`}>
                                <label htmlFor="mensagem">Mensagem</label>
                                <textarea
                                    id="mensagem"
                                    name="mensagem"
                                    placeholder="Escreva sua dúvida ou sugestão..."
                                    rows={5}
                                    value={form.mensagem}
                                    onChange={handleChange}
                                />
                                {errors.mensagem && <span className="contato__error">{errors.mensagem}</span>}
                            </div>

                            {status === 'error' && (
                                <p className="contato__error contato__error--global">
                                    Ocorreu um erro ao enviar. Tente novamente.
                                </p>
                            )}

                            <button
                                type="submit"
                                className="contato__submit"
                                disabled={status === 'loading'}
                            >
                                {status === 'loading' ? 'Enviando...' : 'Enviar mensagem →'}
                            </button>

                        </form>
                    )}
                </div>

            </div>
        </div>
    )
}