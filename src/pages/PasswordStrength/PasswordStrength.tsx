import { useMemo, useState } from 'react'
import { zxcvbn } from '../../lib/zxcvbn'
import { Sidebar } from '../../components/Sidebar/Sidebar'

const scoreLabels = [
  'Muito fraca',
  'Fraca',
  'Razoável',
  'Forte',
  'Muito forte',
] as const

const scoreColors = [
  '#dc2626',
  '#ea580c',
  '#ca8a04',
  '#1682a3ff',
  '#1c1580ff',
] as const

export function PasswordStrength() {
  const [password, setPassword] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  /* Result segura tudo que precisamos */
  const result = useMemo(() => {
    if (!password) {
      return null
    }

    return zxcvbn.check(password)
  }, [password])

  const score = result?.score ?? 0
  const strengthLabel = result ? scoreLabels[score] : 'Digite uma senha'
  const strengthColor = result ? scoreColors[score] : '#d1d5db'
  const percentage = result ? ((score + 1) / 5) * 100 : 0

  const suggestions = result?.feedback.suggestions ?? []
  const warning = result?.feedback.warning

  return (
    <div className="password-page">
    <Sidebar />

      <section className="password-card" aria-labelledby="password-title">
        <p className="eyebrow">Título lá em cima</p>

        <h1 id="password-title">Título enorme</h1>

        <p className="description">
          Descrição do que vai fazer...
        </p>

        <div className="password-input-wrapper">
          <input
            id="password"
            className="password-input"
            type={isVisible ? 'text' : 'password'}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Digite uma senha"
            autoComplete="new-password"
            aria-describedby="password-status"
          />

          <button
            className="visibility-button"
            type="button"
            onClick={() => setIsVisible((visible) => !visible)}
            aria-label={isVisible ? 'Ocultar senha' : 'Mostrar senha'}
          >
            {isVisible ? 'Ocultar' : 'Mostrar'}
          </button>
        </div>

        <div
          className="strength-meter"
          role="progressbar"
          aria-label="Força da senha"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={password ? percentage : 0}
        >
          <span
            className="strength-meter-fill"
            style={{
              width: `${percentage}%`,
              backgroundColor: strengthColor,
            }}
          />
        </div>

        <div id="password-status" className="strength-status">
          <strong style={{ color: strengthColor }}>
            {strengthLabel}
          </strong>

          {result && (
            <span className="guesses">
              {result.guesses.toLocaleString('pt-BR')} tentativas estimadas
            </span>
          )}
        </div>

        {result && (
          <div className="feedback" aria-live="polite">
            {warning && <p className="warning">{warning}</p>}

            {suggestions.length > 0 && (
              <>
                <h2>Sugestões</h2>

                <ul>
                  {suggestions.map((suggestion) => (
                    <li key={suggestion}>{suggestion}</li>
                  ))}
                </ul>
              </>
            )}

            {!warning && suggestions.length === 0 && (
              <p className="success">
                Essa senha parece difícil de adivinhar!
              </p>
            )}
          </div>
        )}

        <p className="password-hint">
          Evite nomes, datas, caracteres repetidos, frases comuns...
        </p>
      </section>
    </div>
  )
}
