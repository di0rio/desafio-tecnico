import { Category, Article } from "@/types";

export const categories: Category[] = [
  {
    id: "cat-1",
    slug: "engenharia-de-software",
    name: "Engenharia de Software",
    description:
      "Práticas, padrões e fundamentos para construir software robusto e escalável.",
    icon: "⚙️",
    color: "#488050",
  },
  {
    id: "cat-2",
    slug: "arquitetura-de-sistemas",
    name: "Arquitetura de Sistemas",
    description:
      "Design de sistemas distribuídos, microsserviços e padrões arquiteturais.",
    icon: "🏛️",
    color: "#725f43",
  },
  {
    id: "cat-3",
    slug: "banco-de-dados",
    name: "Banco de Dados",
    description:
      "Modelagem, otimização e estratégias para bancos de dados relacionais e NoSQL.",
    icon: "🗄️",
    color: "#5c4a34",
  },
  {
    id: "cat-4",
    slug: "devops-e-infraestrutura",
    name: "DevOps & Infraestrutura",
    description:
      "CI/CD, containers, cloud e práticas modernas de entrega de software.",
    icon: "🚀",
    color: "#37663f",
  },
];

export const articles: Article[] = [
  // Engenharia de Software
  {
    id: "art-1",
    slug: "principios-solid",
    title: "Princípios SOLID: Um Guia Prático",
    excerpt:
      "Entenda os cinco princípios fundamentais do design orientado a objetos e como aplicá-los no dia a dia.",
    content: `
      <h2>O que são os princípios SOLID?</h2>
      <p>Os princípios SOLID são cinco diretrizes de design de software orientado a objetos, introduzidas por Robert C. Martin (Uncle Bob). Eles formam a base para escrever código limpo, manutenível e extensível.</p>

      <h3>S — Single Responsibility Principle</h3>
      <p>Uma classe deve ter <strong>apenas um motivo para mudar</strong>. Isso significa que cada classe deve ter uma única responsabilidade bem definida dentro do sistema.</p>
      <blockquote>
        <p>"A class should have one, and only one, reason to change." — Robert C. Martin</p>
      </blockquote>
      <p>Exemplo prático: uma classe <code>UserService</code> não deveria ser responsável tanto por persistir usuários no banco de dados quanto por enviar e-mails de boas-vindas. Essas são responsabilidades distintas.</p>

      <h3>O — Open/Closed Principle</h3>
      <p>Entidades de software devem ser <strong>abertas para extensão, mas fechadas para modificação</strong>. Ao adicionar novas funcionalidades, você não deveria precisar alterar código existente.</p>
      <pre><code>// Ruim: precisamos modificar a classe a cada novo tipo
class AreaCalculator {
  calculate(shape: any): number {
    if (shape.type === 'circle') {
      return Math.PI * shape.radius ** 2;
    }
    if (shape.type === 'square') {
      return shape.side ** 2;
    }
    // Precisa modificar para adicionar novos tipos!
  }
}

// Bom: extensível sem modificação
interface Shape {
  area(): number;
}
class Circle implements Shape {
  area() { return Math.PI * this.radius ** 2; }
}
class AreaCalculator {
  calculate(shape: Shape): number {
    return shape.area(); // Funciona com qualquer Shape
  }
}</code></pre>

      <h3>L — Liskov Substitution Principle</h3>
      <p>Subclasses devem ser substituíveis por suas classes base sem alterar a corretude do programa. Em outras palavras, uma subclasse deve honrar o contrato estabelecido pela sua superclasse.</p>

      <h3>I — Interface Segregation Principle</h3>
      <p>Clientes não devem ser forçados a depender de interfaces que não utilizam. Prefira interfaces menores e mais específicas a interfaces grandes e genéricas.</p>

      <h3>D — Dependency Inversion Principle</h3>
      <p>Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações. Abstrações não devem depender de detalhes; detalhes devem depender de abstrações.</p>

      <h2>Conclusão</h2>
      <p>Aplicar os princípios SOLID de forma consistente resulta em código mais fácil de testar, manter e evoluir. Eles não são regras absolutas, mas sim guias que, quando bem aplicados, elevam significativamente a qualidade do software.</p>
    `,
    categoryId: "cat-1",
    author: "Ana Oliveira",
    publishedAt: "2024-11-15",
    readingTime: 8,
    tags: ["SOLID", "OOP", "Clean Code", "Design Patterns"],
  },
  {
    id: "art-2",
    slug: "clean-code-boas-praticas",
    title: "Clean Code: Boas Práticas que Todo Dev Deve Conhecer",
    excerpt:
      "Nomeação, funções, comentários e estrutura: os fundamentos para escrever código legível e manutenível.",
    content: `
      <h2>Por que Clean Code importa?</h2>
      <p>Código é lido muito mais vezes do que é escrito. Uncle Bob estima que a proporção é de <strong>10:1</strong>. Investir em legibilidade é investir em produtividade futura.</p>

      <h2>Nomeação Significativa</h2>
      <p>Nomes devem revelar intenção. Se você precisa de um comentário para explicar uma variável, o nome está errado.</p>
      <pre><code>// Ruim
const d = 86400;
const arr = users.filter(u => u.a > 18);

// Bom
const SECONDS_PER_DAY = 86400;
const adultUsers = users.filter(user => user.age > 18);</code></pre>

      <h2>Funções Pequenas e Focadas</h2>
      <p>Uma função deve fazer <em>uma coisa apenas</em>, e fazê-la bem. O tamanho ideal é aquele onde o código cabe na tela sem scroll.</p>
      <ul>
        <li>Evite mais de 2-3 parâmetros</li>
        <li>Prefira retorno único (evite múltiplos <code>return</code>)</li>
        <li>Nível único de abstração por função</li>
      </ul>

      <h2>Comentários: Use com Parcimônia</h2>
      <p>Comentários são necessários quando o código não consegue se explicar sozinho. Mas o ideal é que o próprio código seja claro o suficiente.</p>
      <blockquote>
        <p>"Don't comment bad code — rewrite it." — Brian W. Kernighan</p>
      </blockquote>

      <h2>Regra do Escoteiro</h2>
      <p>Deixe o código sempre melhor do que você encontrou. Pequenas melhorias incrementais — renomear uma variável confusa, quebrar uma função longa — compõem em resultados significativos ao longo do tempo.</p>
    `,
    categoryId: "cat-1",
    author: "Carlos Mendes",
    publishedAt: "2024-12-01",
    readingTime: 6,
    tags: ["Clean Code", "Boas Práticas", "Refactoring"],
  },
  {
    id: "art-3",
    slug: "tdd-test-driven-development",
    title: "TDD na Prática: Desenvolvendo Guiado por Testes",
    excerpt:
      "Como o ciclo Red-Green-Refactor transforma a forma de escrever software e aumenta a confiança no código.",
    content: `
      <h2>O que é TDD?</h2>
      <p>Test-Driven Development (TDD) é uma prática de desenvolvimento onde você escreve o teste <em>antes</em> do código de produção. O ciclo fundamental é:</p>
      <ol>
        <li><strong>Red</strong>: Escreva um teste que falha</li>
        <li><strong>Green</strong>: Escreva o mínimo de código para o teste passar</li>
        <li><strong>Refactor</strong>: Melhore o código sem quebrar os testes</li>
      </ol>

      <h2>Benefícios do TDD</h2>
      <ul>
        <li>Design emergente: testes forçam interfaces limpas e desacopladas</li>
        <li>Documentação viva: testes descrevem o comportamento esperado</li>
        <li>Confiança para refatorar: suite de testes como rede de segurança</li>
        <li>Feedback rápido: bugs encontrados segundos após introduzidos</li>
      </ul>

      <h2>Exemplo Prático</h2>
      <pre><code>// 1. RED - Teste falhando
describe('FizzBuzz', () => {
  it('retorna "Fizz" para múltiplos de 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });
});

// 2. GREEN - Implementação mínima
function fizzBuzz(n: number): string {
  if (n % 3 === 0) return 'Fizz';
  return String(n);
}

// 3. REFACTOR - Adicionar casos e limpar
function fizzBuzz(n: number): string {
  if (n % 15 === 0) return 'FizzBuzz';
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';
  return String(n);
}</code></pre>

      <h2>Quando Não Usar TDD</h2>
      <p>TDD não é bala de prata. Para prototipagem rápida, UIs exploratórias ou scripts descartáveis, o overhead pode não valer a pena. Use pragmaticamente.</p>
    `,
    categoryId: "cat-1",
    author: "Fernanda Lima",
    publishedAt: "2025-01-10",
    readingTime: 7,
    tags: ["TDD", "Testes", "Jest", "Qualidade"],
  },
  {
    id: "art-4",
    slug: "code-review-eficiente",
    title: "Como Fazer Code Review de Forma Eficiente",
    excerpt:
      "Práticas para revisões de código construtivas que elevam a qualidade do time sem criar atrito.",
    content: `
      <h2>O Papel do Code Review</h2>
      <p>Code review não é auditoria — é colaboração. O objetivo principal não é encontrar bugs, mas <strong>transferir conhecimento</strong>, manter consistência e garantir que o código seja compreendido pelo time.</p>

      <h2>Para o Autor</h2>
      <ul>
        <li>Escreva PRs pequenos e focados (idealmente &lt;400 linhas)</li>
        <li>Inclua descrição clara do problema e da solução</li>
        <li>Anote pontos que merecem atenção especial</li>
        <li>Não leve críticas ao código como críticas pessoais</li>
      </ul>

      <h2>Para o Revisor</h2>
      <ul>
        <li>Revise com intenção: entenda o contexto antes de comentar</li>
        <li>Distingua blocking issues de sugestões (use prefixos: "blocking:", "nit:", "suggestion:")</li>
        <li>Seja específico e construtivo — explique o porquê</li>
        <li>Elogie boas soluções; feedback positivo é tão importante quanto críticas</li>
      </ul>

      <h2>Checklist Básico</h2>
      <ol>
        <li>O código faz o que deveria fazer?</li>
        <li>Está testado adequadamente?</li>
        <li>É legível e bem nomeado?</li>
        <li>Há casos de borda não tratados?</li>
        <li>Existe documentação necessária?</li>
      </ol>

      <blockquote>
        <p>"Code reviews are not about showing off your knowledge. They're about making the codebase better together."</p>
      </blockquote>
    `,
    categoryId: "cat-1",
    author: "Rafael Santos",
    publishedAt: "2025-02-05",
    readingTime: 5,
    tags: ["Code Review", "Colaboração", "Processo", "Team"],
  },

  // Arquitetura de Sistemas
  {
    id: "art-5",
    slug: "microsservicos-introducao",
    title: "Microsserviços: Quando Usar e Quando Evitar",
    excerpt:
      "Uma análise honesta dos trade-offs de microsserviços versus monolitos e como decidir a arquitetura certa.",
    content: `
      <h2>O Hype dos Microsserviços</h2>
      <p>Microsserviços se tornaram o padrão de facto para sistemas modernos. Mas essa popularidade muitas vezes obscurece uma verdade importante: <strong>microsserviços adicionam complexidade significativa</strong>.</p>

      <h2>Monolito não é palavrão</h2>
      <p>Um monolito bem estruturado é perfeitamente adequado para a maioria dos sistemas. Martin Fowler chama isso de "Modular Monolith" — um monolito com clara separação de módulos internos.</p>
      <blockquote>
        <p>"Don't start with a microservices architecture. Start with a monolith and extract services as needed." — Martin Fowler</p>
      </blockquote>

      <h2>Quando Microsserviços fazem sentido</h2>
      <ul>
        <li>Times grandes que precisam de autonomia de deploy</li>
        <li>Componentes com requisitos de escala radicalmente diferentes</li>
        <li>Necessidade de heterogeneidade tecnológica</li>
        <li>Domínios de negócio com boundaries claros (DDD)</li>
      </ul>

      <h2>Desafios Reais</h2>
      <ul>
        <li>Latência de rede entre serviços</li>
        <li>Consistência eventual e transações distribuídas</li>
        <li>Observabilidade e tracing distribuído</li>
        <li>Overhead operacional (N serviços = N deploys, N monitores)</li>
        <li>Testes de integração complexos</li>
      </ul>

      <h2>Conclusão</h2>
      <p>Comece simples. Extraia serviços quando a dor de não fazer isso superar o custo de fazer. Premature decomposition é tão prejudicial quanto premature optimization.</p>
    `,
    categoryId: "cat-2",
    author: "Ana Oliveira",
    publishedAt: "2024-10-20",
    readingTime: 9,
    tags: ["Microsserviços", "Monolito", "Arquitetura", "DDD"],
  },
  {
    id: "art-6",
    slug: "event-driven-architecture",
    title: "Arquitetura Orientada a Eventos com Kafka",
    excerpt:
      "Como eventos e mensageria transformam a comunicação entre sistemas distribuídos, com exemplos usando Apache Kafka.",
    content: `
      <h2>O que é Arquitetura Orientada a Eventos?</h2>
      <p>Event-Driven Architecture (EDA) é um padrão onde componentes do sistema se comunicam através de <strong>eventos assíncronos</strong>. Em vez de chamadas diretas (síncronas), os produtores publicam eventos e os consumidores reagem a eles.</p>

      <h2>Conceitos Fundamentais</h2>
      <ul>
        <li><strong>Producer</strong>: Publica eventos em um tópico</li>
        <li><strong>Consumer</strong>: Assina tópicos e processa eventos</li>
        <li><strong>Topic</strong>: Canal de comunicação nomeado</li>
        <li><strong>Broker</strong>: Intermediário que gerencia os eventos (ex: Kafka)</li>
      </ul>

      <h2>Kafka em Números</h2>
      <p>O Apache Kafka é capaz de processar <strong>trilhões de eventos por dia</strong>. Empresas como LinkedIn (criador original), Uber e Netflix o utilizam como espinha dorsal de seus sistemas.</p>

      <h2>Exemplo de Fluxo</h2>
      <pre><code>// Producer: Serviço de Pedidos
await kafka.send({
  topic: 'order-created',
  messages: [{
    key: order.id,
    value: JSON.stringify({
      orderId: order.id,
      userId: order.userId,
      total: order.total,
      timestamp: new Date().toISOString()
    })
  }]
});

// Consumer: Serviço de Notificações
kafka.subscribe({ topic: 'order-created' });
kafka.run({
  eachMessage: async ({ message }) => {
    const order = JSON.parse(message.value.toString());
    await notifyUser(order.userId, \`Pedido #\${order.orderId} criado!\`);
  }
});</code></pre>

      <h2>Vantagens e Desvantagens</h2>
      <p>A EDA promove desacoplamento e resiliência, mas traz consistência eventual e maior dificuldade de debug. Use com critério e invista em observabilidade.</p>
    `,
    categoryId: "cat-2",
    author: "João Ferreira",
    publishedAt: "2024-11-28",
    readingTime: 10,
    tags: ["Kafka", "Event-Driven", "Mensageria", "Distribuído"],
  },
  {
    id: "art-7",
    slug: "api-rest-design",
    title: "Design de APIs REST: Princípios e Boas Práticas",
    excerpt:
      "Como projetar APIs REST que são intuitivas, consistentes e evoluem bem ao longo do tempo.",
    content: `
      <h2>O que torna uma API boa?</h2>
      <p>Uma boa API é aquela que os desenvolvedores conseguem usar sem precisar ler a documentação. Ela é <em>intuitiva</em>, <em>consistente</em> e <em>previsível</em>.</p>

      <h2>Recursos e URIs</h2>
      <p>URIs devem representar recursos (substantivos), não ações (verbos). Os verbos HTTP já fazem esse trabalho.</p>
      <pre><code>// Ruim
POST /createUser
GET  /getUsers
POST /deleteUser/123

// Bom
POST   /users
GET    /users
DELETE /users/123</code></pre>

      <h2>Versionamento</h2>
      <p>Versione sua API desde o início. As abordagens mais comuns são:</p>
      <ul>
        <li>URL path: <code>/api/v1/users</code> (mais explícito)</li>
        <li>Header: <code>Accept: application/vnd.api.v1+json</code></li>
        <li>Query param: <code>/users?version=1</code></li>
      </ul>

      <h2>Status HTTP Corretos</h2>
      <table>
        <tr><th>Código</th><th>Uso</th></tr>
        <tr><td>200</td><td>OK - GET, PUT, PATCH bem-sucedidos</td></tr>
        <tr><td>201</td><td>Created - POST bem-sucedido</td></tr>
        <tr><td>204</td><td>No Content - DELETE bem-sucedido</td></tr>
        <tr><td>400</td><td>Bad Request - Dados inválidos</td></tr>
        <tr><td>401</td><td>Unauthorized - Não autenticado</td></tr>
        <tr><td>403</td><td>Forbidden - Sem permissão</td></tr>
        <tr><td>404</td><td>Not Found - Recurso inexistente</td></tr>
        <tr><td>422</td><td>Unprocessable Entity - Validação falhou</td></tr>
        <tr><td>500</td><td>Internal Server Error</td></tr>
      </table>

      <h2>Paginação Consistente</h2>
      <pre><code>// Response com metadados de paginação
{
  "data": [...],
  "pagination": {
    "page": 1,
    "perPage": 20,
    "total": 150,
    "totalPages": 8
  }
}</code></pre>
    `,
    categoryId: "cat-2",
    author: "Mariana Costa",
    publishedAt: "2025-01-22",
    readingTime: 8,
    tags: ["REST", "API Design", "HTTP", "Backend"],
  },
  {
    id: "art-8",
    slug: "cqrs-e-event-sourcing",
    title: "CQRS e Event Sourcing: Separando Leitura de Escrita",
    excerpt:
      "Entenda como CQRS e Event Sourcing resolvem problemas de escala e auditoria em sistemas complexos.",
    content: `
      <h2>Command Query Responsibility Segregation</h2>
      <p>CQRS separa o modelo de leitura do modelo de escrita. Em vez de um único modelo que serve tanto para mutations quanto para queries, você tem dois modelos otimizados para cada propósito.</p>

      <h2>Event Sourcing</h2>
      <p>Em vez de persistir o estado atual, você persiste a <strong>sequência de eventos</strong> que levaram a esse estado. O estado atual é derivado aplicando todos os eventos em ordem.</p>

      <pre><code>// Abordagem tradicional (state)
{ id: 1, saldo: 500, status: 'ativo' }

// Event Sourcing
[
  { type: 'ContaCriada', valor: 1000, ts: '...' },
  { type: 'Saque', valor: 200, ts: '...' },
  { type: 'Saque', valor: 300, ts: '...' },
]
// Saldo derivado: 1000 - 200 - 300 = 500</code></pre>

      <h2>Benefícios</h2>
      <ul>
        <li>Auditoria completa: histórico imutável de tudo que aconteceu</li>
        <li>Time travel: reconstrua o estado em qualquer ponto no tempo</li>
        <li>Debugging facilitado: reproduza exatamente o que ocorreu</li>
        <li>Scalabilidade: modelos de leitura otimizados independentemente</li>
      </ul>

      <h2>Quando Usar</h2>
      <p>CQRS/ES brilha em domínios com alta complexidade de negócio, requisitos de auditoria, ou onde leitura e escrita têm características de carga muito diferentes. Para CRUDs simples, é overhead desnecessário.</p>
    `,
    categoryId: "cat-2",
    author: "Carlos Mendes",
    publishedAt: "2025-02-18",
    readingTime: 11,
    tags: ["CQRS", "Event Sourcing", "DDD", "Escalabilidade"],
  },

  // Banco de Dados
  {
    id: "art-9",
    slug: "indexacao-postgresql",
    title: "Indexação no PostgreSQL: Do Básico ao Avançado",
    excerpt:
      "Aprenda a criar e usar índices de forma eficiente para turbinar as queries do seu banco de dados.",
    content: `
      <h2>Por que índices importam?</h2>
      <p>Sem índices, o banco de dados precisa fazer um <em>sequential scan</em> — varrer todas as linhas da tabela. Em tabelas com milhões de registros, isso pode levar segundos ou minutos.</p>

      <h2>B-Tree: O Índice Padrão</h2>
      <p>O índice B-Tree é o padrão do PostgreSQL e funciona para a maioria dos casos. Suporta igualdade e comparações de intervalo.</p>
      <pre><code>-- Criando um índice simples
CREATE INDEX idx_users_email ON users (email);

-- Índice composto (ordem importa!)
CREATE INDEX idx_orders_user_status ON orders (user_id, status);

-- Índice parcial (apenas registros ativos)
CREATE INDEX idx_active_sessions ON sessions (user_id)
WHERE expires_at > NOW();</code></pre>

      <h2>Analisando Queries com EXPLAIN</h2>
      <pre><code>EXPLAIN ANALYZE
SELECT * FROM orders
WHERE user_id = 123 AND status = 'pending';

-- Saída indica se usa Index Scan ou Seq Scan
-- Index Scan = índice sendo usado ✅
-- Seq Scan em tabela grande = falta índice ⚠️</code></pre>

      <h2>Tipos Especiais de Índice</h2>
      <ul>
        <li><strong>GIN</strong>: Ideal para arrays, JSONB e full-text search</li>
        <li><strong>GiST</strong>: Para dados geoespaciais e intervalos</li>
        <li><strong>Hash</strong>: Apenas para igualdade exata (raramente necessário)</li>
        <li><strong>BRIN</strong>: Para dados com correlação física (ex: timestamps)</li>
      </ul>

      <h2>Armadilhas Comuns</h2>
      <p>Índices têm custo: cada INSERT/UPDATE/DELETE precisa atualizar todos os índices relevantes. Não crie índices desnecessários. Monitore com <code>pg_stat_user_indexes</code> quais índices nunca são usados.</p>
    `,
    categoryId: "cat-3",
    author: "Fernanda Lima",
    publishedAt: "2024-09-14",
    readingTime: 9,
    tags: ["PostgreSQL", "Performance", "Indexação", "SQL"],
  },
  {
    id: "art-10",
    slug: "normalizacao-vs-desnormalizacao",
    title: "Normalização vs. Desnormalização: A Decisão Certa",
    excerpt:
      "Quando seguir formas normais rigorosamente e quando desnormalizar estrategicamente para performance.",
    content: `
      <h2>O que é Normalização?</h2>
      <p>Normalização é o processo de organizar um banco de dados relacional para reduzir redundância e melhorar integridade dos dados. As formas normais (1NF, 2NF, 3NF, BCNF) estabelecem regras progressivamente mais rígidas.</p>

      <h2>3NF: O Objetivo Prático</h2>
      <p>Na prática, atingir a Terceira Forma Normal (3NF) é o objetivo para a maioria dos sistemas:</p>
      <ul>
        <li>1NF: Atributos atômicos, sem grupos repetidos</li>
        <li>2NF: Sem dependência parcial da chave primária</li>
        <li>3NF: Sem dependência transitiva (A → B → C implica A → C diretamente)</li>
      </ul>

      <h2>Quando Desnormalizar</h2>
      <p>Desnormalização <em>intencional</em> pode ser a decisão certa quando:</p>
      <ul>
        <li>Joins frequentes entre tabelas grandes causam gargalo de performance</li>
        <li>Dados são lidos muito mais do que escritos (ratio 100:1 ou mais)</li>
        <li>Cache de dados calculados é necessário (ex: total de pedidos de um usuário)</li>
      </ul>

      <pre><code>-- Normalizado: precisa de JOIN para nome da categoria
SELECT p.name, c.name as category_name
FROM products p JOIN categories c ON p.category_id = c.id;

-- Desnormalizado: category_name em products
-- Troca: duplicação de dado por velocidade de leitura</code></pre>

      <h2>Padrão Híbrido</h2>
      <p>Um padrão comum é manter o banco normalizado como fonte da verdade e usar caches materializados (views materializadas, Redis) para leituras intensivas. Você ganha performance sem sacrificar integridade.</p>
    `,
    categoryId: "cat-3",
    author: "João Ferreira",
    publishedAt: "2024-10-30",
    readingTime: 7,
    tags: ["SQL", "Modelagem", "Performance", "Normalização"],
  },
  {
    id: "art-11",
    slug: "redis-casos-de-uso",
    title: "Redis: Além do Cache — Casos de Uso Avançados",
    excerpt:
      "Redis como fila de mensagens, pub/sub, rate limiting, sessões e geolocalização — muito além de um simples cache.",
    content: `
      <h2>Redis não é só cache</h2>
      <p>Redis é um <em>data structure server</em> em memória. Suas estruturas de dados nativas — strings, hashes, lists, sets, sorted sets, streams — habilitam padrões arquiteturais sofisticados.</p>

      <h2>Rate Limiting</h2>
      <pre><code>// Sliding window com ZADD/ZREMRANGEBYSCORE
async function rateLimit(userId: string, limit: number, windowMs: number) {
  const key = \`ratelimit:\${userId}\`;
  const now = Date.now();
  const window = now - windowMs;

  await redis.multi()
    .zremrangebyscore(key, 0, window)
    .zadd(key, now, \`\${now}\`)
    .expire(key, windowMs / 1000)
    .exec();

  const count = await redis.zcard(key);
  return count <= limit;
}</code></pre>

      <h2>Pub/Sub para Notificações em Tempo Real</h2>
      <pre><code>// Publisher
await redis.publish('notifications:user:42', JSON.stringify({
  type: 'order_shipped',
  orderId: '123'
}));

// Subscriber
subscriber.subscribe('notifications:user:42');
subscriber.on('message', (channel, message) => {
  const event = JSON.parse(message);
  websocket.send(event);
});</code></pre>

      <h2>Sorted Sets para Rankings</h2>
      <p>Sorted Sets são perfeitos para leaderboards em tempo real com complexidade O(log N) para inserção e consulta.</p>
      <pre><code>// Atualizar pontuação
await redis.zadd('leaderboard:global', score, userId);

// Top 10
const top10 = await redis.zrevrange('leaderboard:global', 0, 9, 'WITHSCORES');</code></pre>

      <h2>Streams para Event Log</h2>
      <p>Redis Streams (XADD/XREAD) oferecem uma alternativa leve ao Kafka para processamento de eventos com grupos de consumidores.</p>
    `,
    categoryId: "cat-3",
    author: "Rafael Santos",
    publishedAt: "2025-01-05",
    readingTime: 10,
    tags: ["Redis", "Cache", "Pub/Sub", "Rate Limiting"],
  },
  {
    id: "art-12",
    slug: "migrations-estrategias",
    title: "Estratégias de Migration para Bancos de Dados em Produção",
    excerpt:
      "Como realizar alterações no schema de produção com zero downtime usando técnicas comprovadas.",
    content: `
      <h2>O Problema das Migrations em Produção</h2>
      <p>Alterar o schema de um banco de dados em produção pode causar downtime, lock em tabelas e inconsistências. Com as estratégias certas, é possível fazer isso com <strong>zero downtime</strong>.</p>

      <h2>Expand-Contract Pattern</h2>
      <p>O padrão Expand/Contract (também chamado de parallel change) divide uma migration em três fases:</p>
      <ol>
        <li><strong>Expand</strong>: Adicione o novo estado sem remover o antigo</li>
        <li><strong>Migrate</strong>: Escreva dados duplicados em ambos os formatos</li>
        <li><strong>Contract</strong>: Remova o estado antigo após validar a migration</li>
      </ol>

      <h2>Renomear uma Coluna com Zero Downtime</h2>
      <pre><code>-- Semana 1: Expand - adiciona nova coluna
ALTER TABLE users ADD COLUMN full_name VARCHAR(255);
-- App escreve em ambas: name E full_name

-- Semana 2: Migrate - backfill da nova coluna
UPDATE users SET full_name = name WHERE full_name IS NULL;

-- Semana 3: App só usa full_name, depreca name

-- Semana 4: Contract - remove coluna antiga
ALTER TABLE users DROP COLUMN name;</code></pre>

      <h2>Ferramentas Recomendadas</h2>
      <ul>
        <li><strong>Flyway</strong>: SQL-based, ótimo para times que preferem SQL puro</li>
        <li><strong>Liquibase</strong>: XML/YAML, mais abstração e rollback built-in</li>
        <li><strong>Prisma Migrate</strong>: Para ecossistema Node.js/TypeScript</li>
        <li><strong>gh-ost</strong>: GitHub's tool para ALTER TABLE online no MySQL</li>
      </ul>

      <h2>Nunca Faça em Produção</h2>
      <ul>
        <li>DROP TABLE sem backup verificado</li>
        <li>ALTER TABLE com LOCK em tabelas grandes sem janela de manutenção</li>
        <li>Migration que não tem rollback planejado</li>
      </ul>
    `,
    categoryId: "cat-3",
    author: "Mariana Costa",
    publishedAt: "2025-02-28",
    readingTime: 8,
    tags: ["Migration", "PostgreSQL", "Zero Downtime", "Schema"],
  },

  // DevOps & Infraestrutura
  {
    id: "art-13",
    slug: "docker-para-desenvolvedores",
    title: "Docker para Desenvolvedores: Guia Prático",
    excerpt:
      "Containers, imagens, volumes e compose — tudo que você precisa para usar Docker no desenvolvimento diário.",
    content: `
      <h2>Por que Docker?</h2>
      <p>Docker resolve o clássico "funciona na minha máquina" ao encapsular a aplicação e todas as suas dependências em um container portável e reproduzível.</p>

      <h2>Conceitos Fundamentais</h2>
      <ul>
        <li><strong>Image</strong>: Template imutável para criar containers</li>
        <li><strong>Container</strong>: Instância em execução de uma imagem</li>
        <li><strong>Dockerfile</strong>: Script para construir uma imagem</li>
        <li><strong>Registry</strong>: Repositório de imagens (ex: Docker Hub, ECR)</li>
      </ul>

      <h2>Dockerfile Otimizado para Node.js</h2>
      <pre><code>FROM node:20-alpine AS base
WORKDIR /app

# Instalar dependências (separado do código para cache)
FROM base AS deps
COPY package*.json ./
RUN npm ci --only=production

# Build
FROM base AS builder
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Produção (imagem mínima)
FROM base AS production
COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
USER node
EXPOSE 3000
CMD ["node", "dist/main.js"]</code></pre>

      <h2>Docker Compose para Desenvolvimento</h2>
      <pre><code>services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/mydb
    depends_on:
      db:
        condition: service_healthy

  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: mydb
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
    healthcheck:
      test: ["CMD", "pg_isready"]
      interval: 5s</code></pre>

      <h2>Dicas de Performance</h2>
      <ul>
        <li>Use multi-stage builds para imagens menores</li>
        <li>Ordene Dockerfile do menos para o mais mutável</li>
        <li>Use <code>.dockerignore</code> para excluir node_modules e .git</li>
        <li>Prefira Alpine ou Distroless como base</li>
      </ul>
    `,
    categoryId: "cat-4",
    author: "Ana Oliveira",
    publishedAt: "2024-08-12",
    readingTime: 9,
    tags: ["Docker", "Containers", "DevOps", "Node.js"],
  },
  {
    id: "art-14",
    slug: "ci-cd-github-actions",
    title: "CI/CD com GitHub Actions: Do Zero ao Deploy",
    excerpt:
      "Configure pipelines de integração e entrega contínua completos com GitHub Actions para projetos Node.js.",
    content: `
      <h2>O que é CI/CD?</h2>
      <p><strong>Continuous Integration (CI)</strong> é a prática de integrar código frequentemente e validar automaticamente com testes e builds. <strong>Continuous Delivery (CD)</strong> estende isso até o deploy automatizado para produção.</p>

      <h2>Pipeline Básico com GitHub Actions</h2>
      <pre><code>name: CI/CD Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - run: npm ci
      - run: npm run lint
      - run: npm run test -- --coverage
      - run: npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4
      - name: Deploy to production
        env:
          DEPLOY_KEY: \${{ secrets.DEPLOY_KEY }}
        run: |
          echo "Deploy logic here"</code></pre>

      <h2>Estratégias de Deploy</h2>
      <ul>
        <li><strong>Rolling deploy</strong>: Substitui instâncias gradualmente</li>
        <li><strong>Blue-Green</strong>: Mantém dois ambientes, troca o tráfego instantaneamente</li>
        <li><strong>Canary</strong>: Direciona % do tráfego para nova versão antes de expandir</li>
      </ul>

      <h2>Secrets e Variáveis de Ambiente</h2>
      <p>Nunca hardcode credenciais. Use GitHub Secrets para valores sensíveis e GitHub Environments para controlar quais secrets estão disponíveis em produção vs staging.</p>
    `,
    categoryId: "cat-4",
    author: "Carlos Mendes",
    publishedAt: "2024-09-25",
    readingTime: 8,
    tags: ["GitHub Actions", "CI/CD", "DevOps", "Automação"],
  },
  {
    id: "art-15",
    slug: "kubernetes-conceitos-basicos",
    title: "Kubernetes: Conceitos Essenciais para Desenvolvedores",
    excerpt:
      "Pods, Deployments, Services e Ingress — o vocabulário básico do Kubernetes que todo dev deve conhecer.",
    content: `
      <h2>Por que Kubernetes?</h2>
      <p>Kubernetes (K8s) é um orquestrador de containers que automatiza deploy, scaling e gerenciamento. Para aplicações modernas em múltiplos containers, ele resolve problemas complexos de operação.</p>

      <h2>Hierarquia de Objetos</h2>
      <ul>
        <li><strong>Pod</strong>: Menor unidade — 1 ou mais containers que compartilham rede e storage</li>
        <li><strong>ReplicaSet</strong>: Garante N réplicas de um Pod</li>
        <li><strong>Deployment</strong>: Gerencia RollingUpdate de ReplicaSets</li>
        <li><strong>Service</strong>: Expõe Pods com IP estável e load balancing</li>
        <li><strong>Ingress</strong>: Roteamento HTTP externo para Services</li>
      </ul>

      <h2>Deployment Básico</h2>
      <pre><code>apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: web-app
  template:
    metadata:
      labels:
        app: web-app
    spec:
      containers:
      - name: web-app
        image: myapp:v1.2.3
        ports:
        - containerPort: 3000
        resources:
          requests:
            memory: "128Mi"
            cpu: "100m"
          limits:
            memory: "256Mi"
            cpu: "500m"</code></pre>

      <h2>Liveness e Readiness Probes</h2>
      <p>Probes permitem ao K8s saber quando um container está saudável e pronto para receber tráfego. Configure sempre para evitar downtime durante deploys.</p>
      <pre><code>livenessProbe:
  httpGet:
    path: /health
    port: 3000
  initialDelaySeconds: 30
readinessProbe:
  httpGet:
    path: /ready
    port: 3000</code></pre>
    `,
    categoryId: "cat-4",
    author: "Rafael Santos",
    publishedAt: "2025-01-18",
    readingTime: 11,
    tags: ["Kubernetes", "K8s", "Containers", "Infraestrutura"],
  },
  {
    id: "art-16",
    slug: "observabilidade-logs-metricas-traces",
    title: "Observabilidade: Logs, Métricas e Traces",
    excerpt:
      "Os três pilares da observabilidade e como implementá-los com OpenTelemetry, Prometheus e Grafana.",
    content: `
      <h2>Os Três Pilares</h2>
      <p>Observabilidade é a capacidade de entender o estado interno de um sistema a partir de suas saídas externas. Os três pilares são:</p>
      <ul>
        <li><strong>Logs</strong>: Registro imutável de eventos discretos com contexto</li>
        <li><strong>Métricas</strong>: Dados numéricos agregados ao longo do tempo</li>
        <li><strong>Traces</strong>: Rastreamento de uma requisição através de múltiplos serviços</li>
      </ul>

      <h2>Structured Logging</h2>
      <p>Prefira logs estruturados (JSON) a logs de texto livre. Eles são parseáveis e permitem consultas poderosas.</p>
      <pre><code>// Ruim
console.log('User 123 logged in from IP 1.2.3.4 at 2025-01-01');

// Bom (com Pino/Winston)
logger.info({
  event: 'user.login',
  userId: 123,
  ip: '1.2.3.4',
  traceId: span.spanContext().traceId
});</code></pre>

      <h2>Métricas com Prometheus</h2>
      <pre><code>import { Counter, Histogram } from 'prom-client';

const httpRequests = new Counter({
  name: 'http_requests_total',
  help: 'Total HTTP requests',
  labelNames: ['method', 'route', 'status'],
});

const httpDuration = new Histogram({
  name: 'http_request_duration_seconds',
  help: 'HTTP request duration',
  labelNames: ['method', 'route'],
  buckets: [0.01, 0.05, 0.1, 0.5, 1, 5],
});</code></pre>

      <h2>OpenTelemetry: O Padrão Aberto</h2>
      <p>OpenTelemetry é o padrão da indústria para instrumentação. Uma única integração que envia dados para qualquer backend: Jaeger, Zipkin, Datadog, New Relic, Honeycomb.</p>

      <h2>SLIs, SLOs e SLAs</h2>
      <ul>
        <li><strong>SLI</strong> (Service Level Indicator): Métrica real — ex: p99 latency = 120ms</li>
        <li><strong>SLO</strong> (Service Level Objective): Meta interna — ex: p99 &lt; 200ms em 99.9% do tempo</li>
        <li><strong>SLA</strong> (Service Level Agreement): Contrato externo com penalidades</li>
      </ul>
    `,
    categoryId: "cat-4",
    author: "Fernanda Lima",
    publishedAt: "2025-03-01",
    readingTime: 12,
    tags: ["Observabilidade", "OpenTelemetry", "Prometheus", "Grafana"],
  },
];

export function getArticleWithCategory(article: Article): Article {
  const category = categories.find((c) => c.id === article.categoryId);
  return {
    ...article,
    categoryName: category?.name,
    categorySlug: category?.slug,
  };
}

export function getCategoriesWithCount(): Category[] {
  return categories.map((cat) => ({
    ...cat,
    articleCount: articles.filter((a) => a.categoryId === cat.id).length,
  }));
}
