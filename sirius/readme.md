# *FSML EMF/Sirius*
*FSML* is a domain specific language for *Finite State Machines*, *FSML EMF/Sirius* provides tools for editing such finite state machines.
## Setup *Eclipse*
* If you do not have an *Eclipse Modeling Tools* installation, go to [*Eclipse* download page](http://www.eclipse.org/downloads/) and download and install: `Eclipse Modeling Tools`
* Start *Eclipse*
* Go to the `Help > Eclipse Marketplace...`
  * Install `Sirius 4.1`

## Import and run the Code
* Go to `File > Import... > General > Existing Projects into Workspace` and import the `org.softlang.metalib.sirius.fsml.model`, `org.softlang.metalib.sirius.fsml.model.edit`, `org.softlang.metalib.sirius.fsml.model.editor` and `org.softlang.metalib.sirius.fsml.viewpoint` projects. Wait for *Eclipse* to index and build all the projects.  
* Go to `Run > Run Configurations...` and create a new Eclipse Application. Hereafter, press the *Run* button. The new *Eclipse* starting up now contains all the plugins required to edit and view the *FSML* files.  

## Work with the Editor
### Setting up a Project
* In the clean workspace of the new *Eclipse Application*, create a new *Modeling Project*.

### Working with *FSML* Files
![fsmling](https://f.cloud.github.com/assets/5929561/1878835/22abbc76-7941-11e3-89a0-279a55c581db.gif)
* Go to `New > Other... > Example EMF Model Creation Wizards` and create a new *Fsml Model* with *Model Object* chosen to be *FSM*.
* Right-click on the project and check *Fsml* in `Viewpoints Selection`.
* Navigate in the project explorer starting from the new Fsml file to the contained *FSM* entry. If *FSM* contains a nested *State Diagram* open it, otherwise create it first by right-clicking on *FSM* and selecting `New Representation > new State Diagram`.
* Use *F2* to rename a state or transition. A transitions label follows the pattern input/action. Create nodes and transitions by using the tools in the right panel. Press *Del* to delete.