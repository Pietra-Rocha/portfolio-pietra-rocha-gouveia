# Artefato 04 – Modelagem de Banco de Dados (DER)

## Objetivo
Este artefato apresenta o modelo lógico do banco de dados do sistema de avaliação de comércios.

## Descrição do Sistema
O sistema permite:
- Cadastro de comércios
- Avaliações de clientes
- Geração de rankings

## Entidades Principais
- Comércio
- Categoria
- Usuário
- Comerciante
- Administrador
- Avaliação
- Comentário
- Localização
- Ranking
- Relatório

## Relacionamentos
- Usuário → Avaliação (1:N)
- Comércio → Avaliação (1:N)
- Avaliação → Comentário (1:N)
- Comércio → Categoria (1:N)
- Comércio → Localização (1:N)
- Comércio ↔ Ranking (N:M)
- Comerciante → Comércio (1:N)

## Desafios
- Definição do relacionamento entre ranking, comércio e categoria

## Resultado
O DER representa de forma estruturada o funcionamento do sistema e serve como base para implementação do banco de dados.

## Documento
Este artefato contém o diagrama entidade-relacionamento e detalhamento das entidades.
