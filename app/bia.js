"use client"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { HelpCircle, Heart, Send, TrendingUp, Briefcase } from "lucide-react"

const BIAPage = ({ user }) => {
  const [chatMessages, setChatMessages] = useState([
    {
      sender: "bia",
      message:
        "Oi! Eu sou a BIA, sua assistente estudantil! Estou aqui para te ajudar com dicas de estudo, rotina e orientação profissional. Como posso te apoiar hoje?",
    },
  ])
  const [newMessage, setNewMessage] = useState("")

  const sendMessage = () => {
    if (newMessage.trim()) {
      setChatMessages([
        ...chatMessages,
        { sender: "user", message: newMessage },
        { sender: "bia", message: getBIAResponse(newMessage) },
      ])
      setNewMessage("")
    }
  }

  const getBIAResponse = (message) => {
    const contextualResponses = [
      `Você já concluiu ${user?.mentoriasAssistidas || 0} mentorias! Que tal assistir a próxima?`,
      "Lembre-se de revisar sua última mentoria para fixar o aprendizado!",
      "Para aumentar sua produtividade, tente usar a técnica Pomodoro: 25min focado + 5min pausa!",
      `Você tem ${user?.xp || 0} XP! Continue assim para subir de nível!`,
      "Que tal fazer uma pausa para alongar? Seu corpo e mente agradecem!",
      "Organize sua agenda de estudos. Planejamento é metade do sucesso!",
      "Você sabia? Estudar em grupos pode aumentar sua retenção em até 90%!",
      "Defina metas pequenas e alcançáveis. Cada vitória conta!",
      "Beba água e mantenha-se hidratado durante os estudos!",
      "Que área profissional mais te interessa hoje? Posso te dar dicas específicas!",
    ]
    return contextualResponses[Math.floor(Math.random() * contextualResponses.length)]
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-darkBlue mb-4">BIA - Sua Assistente Estudantil</h1>
        <p className="text-gray-600">Dicas de estudo, rotina e orientação profissional</p>
      </div>

      <Card className="border-0 shadow-xl max-w-4xl mx-auto rounded-2xl">
        <CardContent className="p-0 h-[500px] flex flex-col">
          <div className="bg-primaryOrange p-6 text-white rounded-t-2xl">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center">
                <HelpCircle className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">BIA</h3>
                <p className="text-sm opacity-75">Sua assistente estudantil</p>
              </div>
            </div>
          </div>

          <div className="flex-1 p-6 overflow-y-auto space-y-4">
            {chatMessages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                    msg.sender === "user"
                      ? "bg-primaryOrange text-white"
                      : "bg-orange-50 text-darkBlue border border-orange-200"
                  }`}
                >
                  {msg.sender === "bia" && (
                    <div className="flex items-center mb-2">
                      <Heart className="h-4 w-4 mr-2 text-primaryOrange" />
                      <span className="font-semibold text-sm">BIA</span>
                    </div>
                  )}
                  <p className="text-sm leading-relaxed">{msg.message}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 border-t border-gray-200">
            <div className="flex space-x-3">
              <Input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Digite sua mensagem para BIA..."
                onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                className="flex-1 rounded-2xl border-gray-300 focus:border-primaryOrange"
              />
              <Button
                onClick={sendMessage}
                className="bg-primaryOrange hover:bg-orange-600 text-white rounded-2xl px-6"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        <Card className="border-0 shadow-lg bg-orange-50 rounded-2xl">
          <CardContent className="p-4">
            <div className="flex items-center mb-3">
              <div className="bg-primaryOrange w-8 h-8 rounded-full flex items-center justify-center mr-3">
                <TrendingUp className="h-4 w-4 text-white" />
              </div>
              <h3 className="font-bold text-darkBlue text-sm">Dicas de Estudo</h3>
            </div>
            <p className="text-xs text-gray-700">
              "Como melhorar minha concentração?" ou "Me ajude a criar um cronograma"
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-blue-50 rounded-2xl">
          <CardContent className="p-4">
            <div className="flex items-center mb-3">
              <div className="bg-darkBlue w-8 h-8 rounded-full flex items-center justify-center mr-3">
                <Briefcase className="h-4 w-4 text-white" />
              </div>
              <h3 className="font-bold text-darkBlue text-sm">Orientação Profissional</h3>
            </div>
            <p className="text-xs text-gray-700">
              "Que carreira combina comigo?" ou "Como me preparar para o mercado?"
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-orange-50 rounded-2xl">
          <CardContent className="p-4">
            <div className="flex items-center mb-3">
              <div className="bg-primaryOrange w-8 h-8 rounded-full flex items-center justify-center mr-3">
                <Heart className="h-4 w-4 text-white" />
              </div>
              <h3 className="font-bold text-darkBlue text-sm">Motivação Diária</h3>
            </div>
            <p className="text-xs text-gray-700">"Estou desmotivado" ou "Como manter disciplina nos estudos?"</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default BIAPage
