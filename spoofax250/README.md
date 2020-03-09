This is a Spoofax (2.5.0) project implementing DSL for a Finite State Machine.
This is an enhancement of the Metalib Spoofax project (https://github.com/softlang/metalib/tree/master/spoofax).

Features:
- Language Definition (syntax/Fsml.sdf3)
- Tests (test/TurnstileTest.spt) 
- Code Generation (trans/codegen/java.str, [Spoofax] > [Transform]> [Generate Java Class])
- Graphviz Dot file generation (trans/codegen/java.str, [Spoofax] > [Transform] > [Generate Graphviz Dot file])
- Outline showing states and transitions in when .fsm file is opened. (trans/transform/outline.str, )
- Name binding  (trans/statics/fsml.nabl2)
  - Unique state names (in states, transitions)
  - Single initial state
  - Get missing states
  - Get unreachable states 


Info:
When .fsm file is opened
To show AST: [Spoofax] > [Syntax] > [Show parsed AST]
To show scope graph: [Spoofax] > [Analysis] > [Debug Project scope graph]

Requirements:
- Spoofax 2.5.0

Import:
- This is a full Spoofax Eclipse project, and the [Import] > [Existing projects into Workspace] wizard can be used.  

To Build:
[Project] > [Build]