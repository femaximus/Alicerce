"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, Clock, CheckCircle, Sparkles } from "lucide-react"

const TesteDISCPage = ({ onIniciarTeste }) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-darkBlue mb-4">Teste DISC</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Descubra seu perfil comportamental através de um teste profissional e preciso
        </p>
      </div>

      <Card className="border-0 shadow-xl max-w-2xl mx-auto rounded-2xl">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <div className="bg-primaryOrange w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <BarChart3 className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-darkBlue mb-4">Teste DISC Profissional</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Descubra seu perfil comportamental através de 30 perguntas estratégicas divididas em 3 etapas.
            </p>
          </div>

          <div className="bg-orange-50 p-6 rounded-2xl mb-6">
            <h3 className="font-bold text-darkBlue mb-3 flex items-center">
              <Sparkles className="h-5 w-5 mr-2 text-primaryOrange" />
              Instruções Importantes
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                <span>Responda com base no seu comportamento natural no trabalho</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                <span>Seja honesto - não há respostas certas ou erradas</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                <span>Confie na sua primeira impressão ao escolher</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500 mb-4">
              <Clock className="h-4 w-4 inline mr-1" />
              Tempo estimado: 8-12 minutos • 30 perguntas
            </p>
            <Button
              onClick={onIniciarTeste}
              className="bg-primaryOrange hover:bg-orange-600 text-white px-8 py-3 rounded-2xl text-lg font-semibold"
            >
              <BarChart3 className="h-5 w-5 mr-2" />
              Iniciar Teste DISC
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default TesteDISCPage
