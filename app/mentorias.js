"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock, Star, Play, Lock, BookOpen, CheckCircle } from "lucide-react"

const mentores = [
  {
    id: 1,
    nome: "Bruna Legnaioli",
    area: "Autoestima",
    tempo: "35 min",
    avaliacao: 4.9,
    participantes: 156,
    foto: "/angela-mezzetti.png", // Trocada: agora Bruna usa a foto da Angela
    cor: "#D95E28",
    palavraChave: "AUTOESTIMA",
    liberada: true,
    descricao: "Desenvolva uma autoestima sólida e aprenda a valorizar suas qualidades únicas",
  },
  {
    id: 2,
    nome: "Angela Mezzetti",
    area: "Sabotadores",
    tempo: "40 min",
    avaliacao: 4.8,
    participantes: 203,
    foto: "/bruna-legnaioli.png", // Trocada: agora Angela usa a foto da Bruna
    cor: "#A837A8",
    palavraChave: "SABOTADORES",
    liberada: false,
    descricao: "Identifique e supere os padrões mentais que limitam seu potencial",
  },
  {
    id: 3,
    nome: "Angela Mezzetti",
    area: "Autoconhecimento",
    tempo: "45 min",
    avaliacao: 4.9,
    participantes: 189,
    foto: "/bruna-legnaioli.png", // Mantém a mesma foto da Angela (que agora é a da Bruna)
    cor: "#203A54",
    palavraChave: "AUTOCONHECIMENTO",
    liberada: false,
    descricao: "Descubra quem você realmente é e qual seu propósito de vida",
  },
]

export default function MentoriasPage({ user, onAssistirMentoria }) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-darkBlue mb-4">Mentorias</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Jornada de desenvolvimento pessoal com especialistas renomadas
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {mentores.map((mentor, index) => {
          const isLiberada = mentor.liberada || user?.mentoriasLiberadas?.includes(mentor.id - 1)
          const jaAssistida = user?.mentoriasAssistidas >= mentor.id

          return (
            <Card
              key={mentor.id}
              className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden rounded-2xl"
            >
              <div className="h-2" style={{ backgroundColor: mentor.cor }} />
              <CardContent className="p-4 md:p-6">
                <div className="text-center mb-3 md:mb-4">
                  <Avatar className="h-16 w-16 md:h-20 md:w-20 mx-auto mb-3 ring-4 ring-white shadow-lg">
                    <AvatarImage src={mentor.foto || "/placeholder.svg"} alt={mentor.nome} className="object-cover" />
                    <AvatarFallback style={{ backgroundColor: mentor.cor, color: "white" }}>
                      {mentor.nome
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg md:text-xl font-bold text-darkBlue mb-1">{mentor.nome}</h3>
                  <Badge
                    style={{ backgroundColor: mentor.cor, color: "white" }}
                    className="mb-2 md:mb-3 rounded-full text-xs"
                  >
                    {mentor.area}
                  </Badge>
                  <p className="text-xs md:text-sm text-gray-600 mb-2 md:mb-3 leading-relaxed px-2">
                    {mentor.descricao}
                  </p>
                </div>

                <div className="space-y-2 mb-3 md:mb-4">
                  <div className="flex items-center justify-between text-xs md:text-sm">
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-3 w-3 md:h-4 md:w-4 mr-2" />
                      {mentor.tempo}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Star className="h-3 w-3 md:h-4 md:w-4 mr-1 text-yellow-500" />
                      {mentor.avaliacao}
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500">{mentor.participantes} alunos participaram</p>
                  </div>
                </div>

                {jaAssistida && (
                  <div className="bg-green-50 p-2 md:p-3 rounded-xl mb-3 md:mb-4 text-center">
                    <p className="text-xs md:text-sm text-green-700 font-medium flex items-center justify-center">
                      <CheckCircle className="h-3 w-3 md:h-4 md:w-4 mr-2" />
                      Mentoria Concluída
                    </p>
                  </div>
                )}

                <Button
                  onClick={() => onAssistirMentoria(mentor.id)}
                  disabled={!isLiberada}
                  className={`w-full rounded-xl group-hover:scale-105 transition-all duration-300 text-sm md:text-base py-2 md:py-3 ${
                    !isLiberada
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : jaAssistida
                        ? "bg-green-500 hover:bg-green-600 text-white"
                        : "bg-primaryOrange hover:bg-orange-600 text-white"
                  }`}
                >
                  {!isLiberada ? (
                    <>
                      <Lock className="h-3 w-3 md:h-4 md:w-4 mr-2" />
                      Complete a mentoria anterior
                    </>
                  ) : jaAssistida ? (
                    <>
                      <Play className="h-3 w-3 md:h-4 md:w-4 mr-2" />
                      Assistir Novamente
                    </>
                  ) : (
                    <>
                      <Play className="h-3 w-3 md:h-4 md:w-4 mr-2" />
                      Assistir Mentoria
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="bg-orange-50 p-6 rounded-2xl max-w-2xl mx-auto">
        <h3 className="font-bold text-darkBlue mb-3 text-center flex items-center justify-center">
          <BookOpen className="h-5 w-5 mr-2 text-primaryOrange" />
          Sequência de Aprendizado
        </h3>
        <div className="space-y-2 text-sm text-gray-700">
          <p>
            <strong>1. Autoestima:</strong> Base fundamental para o desenvolvimento pessoal
          </p>
          <p>
            <strong>2. Sabotadores:</strong> Identifique e supere limitações internas
          </p>
          <p>
            <strong>3. Autoconhecimento:</strong> Descubra seu verdadeiro potencial
          </p>
        </div>
        <p className="text-xs text-gray-500 mt-3 text-center">
          Complete as mentorias em sequência para desbloquear o Teste DISC
        </p>
      </div>
    </div>
  )
}
