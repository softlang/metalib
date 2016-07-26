module main::rascal::de::sschauss::fsml::Visualizer

import IO;
import Prelude;
import vis::Figure;
import vis::KeySym;
import vis::Render;
import main::rascal::de::sschauss::fsml::ConcreteSyntax;

public void visualize(Tree t, loc location) {
	list[Figure] nodes = [];
	list[Edge] edges = [];
	visit(t) {
		case State state : {
			nodes += makeNode(state);
			edges += makeEdges(state);
		}
	}
	render(graph(nodes, edges, hint("layered"), gap(200)));
}

private Figure makeNode(State state) {
	return ellipse(text("<state.id>"),  id("<state.id>"), fillColor(gray(200)), gap(4));
}

private list[Edge] makeEdges(State state) {
	list[Edge] edges = [];
	visit(state) {
		case (Transition)`<Input _>;`: edges += makeEdge(state.id, state.id);
		case (Transition)`<Input _> / <Action _>;`: edges += makeEdge(state.id, state.id);
		case (Transition)`<Input _> -\> <Id to>;`:  edges += makeEdge(state.id, to);
		case (Transition)`<Input _> / <Action _> -\> <Id to>;`: edges += makeEdge(state.id, to);	
	}
	return edges; 
}

private Edge makeEdge(Id from, Id to) = edge("<from>", "<to>", toArrow(triangle(10, fillColor("black"))));


