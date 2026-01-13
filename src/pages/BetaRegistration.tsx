import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Smartphone, Mail, User, Loader2 } from 'lucide-react';
import { supabase } from '../supabaseClient';
import './BetaRegistration.css';

const BetaRegistration: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        isAndroid: null as boolean | null,
    });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const { error: supabaseError } = await supabase
                .from('beta_registrations')
                .insert([
                    {
                        name: formData.name,
                        email: formData.email,
                        is_android: formData.isAndroid,
                    },
                ]);

            if (supabaseError) throw supabaseError;

            setSubmitted(true);
        } catch (err: any) {
            console.error('Error submitting form:', err);
            setError('Hubo un error al procesar tu registro. Por favor, inténtalo de nuevo.');
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <div className="beta-registration-container">
                <div className="bg-blob blob-1"></div>
                <div className="bg-blob blob-2"></div>
                <div className="success-card">
                    <CheckCircle2 size={64} className="success-icon" />
                    <h1>¡Gracias, {formData.name}!</h1>
                    <p>Te hemos añadido a nuestra lista de espera para la beta cerrada.</p>
                    <p className="privacy-note">Te contactaremos pronto por correo electrónico.</p>
                    <button className="btn-primary" onClick={() => navigate('/')}>Volver al Inicio</button>
                </div>
            </div>
        );
    }

    return (
        <div className="beta-registration-container">
            <div className="bg-blob blob-1"></div>
            <div className="bg-blob blob-2"></div>

            <button className="back-button" onClick={() => navigate('/')}>
                <ArrowLeft size={20} />
                Volver
            </button>

            <div className="registration-card">
                <div className="card-header">
                    <h1>Únete a la Beta Cerrada</h1>
                    <p>Sé de los primeros en experimentar el futuro de la gestión financiera para tu salón.</p>
                </div>

                <form onSubmit={handleSubmit} className="registration-form">
                    {error && <div className="error-banner">{error}</div>}
                    <div className="input-group">
                        <label htmlFor="name">Nombre Completo</label>
                        <div className="input-wrapper">
                            <User size={18} className="input-icon" />
                            <input
                                type="text"
                                id="name"
                                required
                                placeholder="Ej: Juan Pérez"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                disabled={loading}
                            />
                        </div>
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Correo Electrónico (Google Play)</label>
                        <div className="input-wrapper">
                            <Mail size={18} className="input-icon" />
                            <input
                                type="email"
                                id="email"
                                required
                                placeholder="Ej: juan@gmail.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                disabled={loading}
                            />
                        </div>
                    </div>

                    <div className="input-group">
                        <label>¿Tu celular es Android?</label>
                        <div className="radio-group">
                            <button
                                type="button"
                                className={`radio-btn ${formData.isAndroid === true ? 'active' : ''}`}
                                onClick={() => setFormData({ ...formData, isAndroid: true })}
                                disabled={loading}
                            >
                                <Smartphone size={18} />
                                Sí
                            </button>
                            <button
                                type="button"
                                className={`radio-btn ${formData.isAndroid === false ? 'active' : ''}`}
                                onClick={() => setFormData({ ...formData, isAndroid: false })}
                                disabled={loading}
                            >
                                No
                            </button>
                        </div>
                        {formData.isAndroid === false && (
                            <p className="warning-text">La beta cerrada actualmente solo está disponible para dispositivos Android.</p>
                        )}
                    </div>

                    <div className="privacy-disclaimer">
                        <p>Nota: Tu correo electrónico se utilizará exclusivamente para habilitar la descarga de la App a través de Google Play Store.</p>
                    </div>

                    <button
                        type="submit"
                        className="btn-primary submit-btn"
                        disabled={formData.isAndroid === null || loading}
                    >
                        {loading ? (
                            <>
                                <Loader2 className="animate-spin" size={20} />
                                Procesando...
                            </>
                        ) : 'Solicitar Acceso'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BetaRegistration;
