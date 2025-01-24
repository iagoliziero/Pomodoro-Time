
# ⏳ Pomodoro Time  

O **Pomodoro Time** é uma aplicação desenvolvida para ajudar na gestão de tempo e aumento da produtividade com base na técnica Pomodoro.

 A interface é minimalista e intuitiva, permitindo que os usuários configurem suas sessões de trabalho e pausas de maneira prática e eficiente.

![Image](https://github.com/user-attachments/assets/ecce0252-e6e2-49b3-9b0c-69adc2ce8b21)

---

## 🚀 Demonstração  
Você pode conferir o projeto ao vivo aqui:  
🔗 **[Pomodoro Time - Deploy no Vercel](https://pomodoro-timer-one-lovat.vercel.app/)**  

---

## 🛠 Tecnologias Utilizadas  

- **React.js**: Biblioteca principal para criação da interface.  
- **TailwindCSS**: Framework CSS para estilização rápida e responsiva.  
- **Lucide Icons**: Conjunto moderno de ícones para enriquecer a experiência visual.  
- **JavaScript ES6+**: Linguagem base para as funcionalidades do cronômetro.  
- **HTML5 e CSS3**: Estruturação e estilos adicionais.  

---

## 🌟 Funcionalidades  

- **Cronômetro Personalizável**:  
  - Configure o tempo da sessão de trabalho e pausas.  
  - Inicie, pause ou resete o cronômetro a qualquer momento.  

- **Interface Responsiva**:  
  - Design adaptável para diferentes tamanhos de tela e dispositivos.  

- **Controle Intuitivo**:  
  - Botões de fácil acesso para ajustar os valores e controlar o tempo.  

- **Estilização Modernizada**:  
  - Paleta de cores contrastante e elementos estilizados com feedback visual.  

---

## 📂 Estrutura do Projeto  

O código foi organizado em componentes reutilizáveis, facilitando a manutenção e escalabilidade:

```
src/
├── components/
│   ├── Cronometro.jsx     # Componente principal que integra cronômetro e configurações
│   ├── Pomodoro.jsx       # Gerencia a exibição do cronômetro e controles
│   ├── Config.jsx         # Permite ajustes de tempos de sessão e pausa
│   ├── PlayButton.jsx     # Botão para iniciar, pausar ou resetar o cronômetro
│   ├── ArrowButton.jsx    # Botões para incremento/decremento
│   ├── ButtonAdd.jsx      # Botão para confirmar alterações
│   └── H2.jsx             # Título estilizado reutilizável
├── App.css                # Estilos globais
├── App.js                 # Componente principal
└── index.js               # Ponto de entrada da aplicação
```

---

## ⚙️ Instalação  

Siga os passos abaixo para rodar o projeto localmente:  

1. Clone este repositório:  
   ```bash
   git clone https://github.com/iagoliziero/Pomodoro-Timer.git
   ```

2. Acesse o diretório do projeto:  
   ```bash
   cd Pomodoro-Timer
   ```

3. Instale as dependências:  
   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:  
   ```bash
   npm start
   ```

5. Acesse no navegador:  
   ```
   http://localhost:3000
   ```

---

## 📋 Próximos Passos  

Aqui estão algumas ideias para melhorias futuras:  

- Integração com notificações no navegador ao término de uma sessão ou pausa.  
- Adicionar sons de alerta para início e fim de ciclos.  
- Histórico de sessões concluídas.  
- Configuração para múltiplos ciclos de trabalho e pausa.  

---

## 🤝 Contribuindo  

Contribuições são sempre bem-vindas! Para contribuir:  

1. Faça um fork do projeto.  
2. Crie uma branch para sua feature/bugfix:  
   ```bash
   git checkout -b feature/nome-da-feature
   ```  
3. Commit suas alterações:  
   ```bash
   git commit -m "Descrição da alteração"
   ```  
4. Envie para o repositório remoto:  
   ```bash
   git push origin feature/nome-da-feature
   ```  
5. Abra um **Pull Request** e descreva suas alterações.  

---

## 📄 Licença  

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais informações.  

---

## ✨ Autor  

Desenvolvido por [Iago Liziero](https://github.com/iagoliziero).  
Sinta-se à vontade para entrar em contato e compartilhar ideias!  
