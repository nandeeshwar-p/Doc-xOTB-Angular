
# Angular Context Menu

 - The context menu is reusable and have set of input options to disable, enable and add items to the menu.
<br/>

#### Procedure
 - Run the application and you can find a bordered area at top where you can right click to see the context menu.

# Dependencies
- Angular material

#Properties

## Inputs
- Data - JSON data to be rendered inside the context menu.
- Class - class to be added in the context menu.
## Outputs
- The menu emits events on closing the menu and also clicking on an option.

# Sample
     <app-context-menu klass="new-class" [data]=data (optionClick)="click($event)" (closed)="click($event)"></app-context-menu>