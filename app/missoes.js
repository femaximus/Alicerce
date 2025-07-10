"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Calendar, Target, Zap, CheckCircle, Play, Lock } from "lucide-react"

const missoes = [
  {
    id: 1,
    titulo: "Estratégia de Time E-Sports",
    descricao: "Desenvolva uma estratégia completa para um time fictício de e-sports",
    prazo: "5 dias",
    progresso: 60,
    status: "Em andamento",
    mentorArea: "E-Sports",
    xpRecompensa: 200,
    mentoriaId: 1,
  },
  {
    id: 2,
    titulo: "Fluxo de Caixa Empresarial",
    descricao: "Crie um fluxo de caixa detalhado para uma pequena empresa",
    prazo: "3 dias",
    progresso: 0,
    status: "Bloqueada",
    mentorArea: "Contabilidade",
    xpRecompensa: 150,
    mentoriaId: 2,
  },
  {
    id: 3,
    titulo: "Plano de Negócio Social",
    descricao: "Desenvolva um plano de negócio com foco em impacto social",
    prazo: "7 dias",
    progresso: 0,
    status: "Bloqueada",
    mentorArea: "Empreendedorismo Feminino",
    xpRecompensa: 250,
    mentoriaId: 3,
  },
  {
    id: 4,
    titulo: "Identidade Visual Completa",
    descricao: "Crie uma identidade visual completa para uma startup",
    prazo: "4 dias",
    progresso: 0,
    status: "Bloqueada",
    mentorArea: "Design",
    xpRecompensa: 180,
    mentoriaId: 4,
  },
]

export default function MissoesPage({ user, onIniciarMissao }) {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-darkBlue mb-4">Missões</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">Coloque em prática o que aprendeu e ganhe XP</p>
      </div>

      <div className="space-y-4">
        {missoes.map((missao) => {
          const isLiberada = user?.mentoriasLiberadas?.includes(missao.mentoriaId) || missao.mentoriaId === 1
          const status = isLiberada ? (missao.status === "Bloqueada" ? "Disponível" : missao.status) : "Bloqueada"

          return (
            <Card
              key={missao.id}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden rounded-2xl"
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-3 mb-3">
                      <h3 className="text-xl font-bold text-darkBlue">{missao.titulo}</h3>
                      <Badge
                        className={`rounded-full text-xs w-fit ${
                          status === "Concluído"
                            ? "bg-green-500 text-white"
                            : status === "Em andamento"
                              ? "bg-primaryOrange text-white"
                              : status === "Disponível"
                                ? "bg-secondaryPurple text-white"
                                : "bg-gray-300 text-gray-700"
                        }`}
                      >
                        {status}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-4">{missao.descricao}</p>
                    <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        Prazo: {missao.prazo}
                      </div>
                      <div className="flex items-center">
                        <Target className="h-4 w-4 mr-2" />
                        {missao.mentorArea}
                      </div>
                      <div className="flex items-center">
                        <Zap className="h-4 w-4 mr-2 text-primaryOrange" />+{missao.xpRecompensa} XP
                      </div>
                    </div>
                  </div>
                </div>

                {isLiberada && (
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">Progresso</span>
                      <span className="font-bold text-darkBlue">{missao.progresso}%</span>
                    </div>
                    <Progress value={missao.progresso} className="h-3" />
                  </div>
                )}

                <Button
                  disabled={!isLiberada}
                  onClick={() => {
                    if (status === "Disponível") {
                      onIniciarMissao(missao.id)
                    }
                  }}
                  className={`w-full h-12 rounded-xl font-semibold transition-all duration-300 mt-4 ${
                    !isLiberada
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : status === "Concluído"
                        ? "bg-green-500 hover:bg-green-600 text-white"
                        : status === "Em andamento"
                          ? "bg-primaryOrange hover:bg-orange-600 text-white"
                          : "bg-secondaryPurple hover:bg-purple-700 text-white"
                  }`}
                >
                  {!isLiberada ? (
                    <>
                      <Lock className="h-5 w-5 mr-2" />
                      Assista a mentoria primeiro
                    </>
                  ) : status === "Concluído" ? (
                    <>
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Missão Concluída
                    </>
                  ) : status === "Em andamento" ? (
                    <>
                      <Target className="h-5 w-5 mr-2" />
                      Continuar Missão
                    </>
                  ) : (
                    <>
                      <Play className="h-5 w-5 mr-2" />
                      Iniciar Missão
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
