-- CreateTable
CREATE TABLE "noticias" (
    "id_noticia" SERIAL NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "imagen" TEXT NOT NULL,
    "contenido" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "noticias_pkey" PRIMARY KEY ("id_noticia")
);
