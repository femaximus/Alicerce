"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock, Star, Play } from "lucide-react"

const mentores = [
  {
    id: 1,
    nome: "Equipe AMD E-Sports",
    area: "E-Sports",
    empresa: "AMD",
    tempo: "45 min",
    avaliacao: 4.9,
    participantes: 234,
    foto: "/placeholder.svg?height=80&width=80",
    cor: "#F57C42",
    palavraChave: "ESTRATEGIA",
    liberada: true,
  },
  {
    id: 2,
    nome: "Vanessa Braga",
    area: "Contabilidade",
    tempo: "50 min",
    avaliacao: 4.8,
    participantes: 189,
    foto: "/placeholder.svg?height=80&width=80",
    cor: "#203A54",
    palavraChave: "BALANCO",
    liberada: false,
  },
  {
    id: 3,
    nome: "Stefanie Shimoze",
    area: "Empreendedorismo Feminino",
    tempo: "40 min",
    avaliacao: 4.9,
    participantes: 156,
    foto: "/placeholder.svg?height=80&width=80",
    cor: "#F57C42",
    palavraChave: "LIDERANCA",
    liberada: false,
  },
  {
    id: 4,
    nome: "Renan Oliveira",
    area: "Design",
    tempo: "60 min",
    avaliacao: 4.8,
    participantes: 203,
    foto: "/placeholder.svg?height=80&width=80",
    cor: "#203A54",
    palavraChave: "CRIATIVIDADE",
    liberada: false,
  },
]

export default function MentoriasPage({ onAssistirMentoria }) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-darkBlue mb-4">Mentorias</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Aprenda com profissionais experientes e acelere seu crescimento
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mentores.map((mentor) => (
          <Card
            key={mentor.id}
            className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden rounded-2xl"
          >
            <div className="h-2" style={{ backgroundColor: mentor.cor }} />
            <CardContent className="p-6">
              <div className="text-center mb-4">
                <Avatar className="h-16 w-16 mx-auto mb-3 ring-4 ring-white shadow-lg">
                  <AvatarImage src={mentor.foto || "/placeholder.svg"} alt={mentor.nome} />
                  <AvatarFallback style={{ backgroundColor: mentor.cor, color: "white" }}>
                    {mentor.nome
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-bold text-darkBlue mb-1">{mentor.nome}</h3>
                {mentor.empresa && <p className="text-sm text-gray-500 mb-2">{mentor.empresa}</p>}
                <Badge style={{ backgroundColor: mentor.cor, color: "white" }} className="mb-2 rounded-full">
                  {mentor.area}
                </Badge>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    {mentor.tempo}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Star className="h-4 w-4 mr-1 text-yellow-500" />
                    {mentor.avaliacao}
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500">{mentor.participantes} alunos participaram</p>
                </div>
              </div>

              <Button
                onClick={() => onAssistirMentoria(mentor.id)}
                className="w-full bg-primaryOrange hover:bg-orange-600 text-white rounded-xl group-hover:scale-105 transition-all duration-300"
              >
                <Play className="h-4 w-4 mr-2" />
                Assistir Mentoria
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
