import { async, ComponentFixture, TestBed} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TreeNodeComponent } from './tree-node/tree-node.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
describe('AppComponent', () => {
  const treeInput = {
    label: 'app',
    checked: false,
    children: [
      {
        label: 'app.component.html',
        checked: false,
        children: []
      }, {
        label: 'app.component.ts',
        checked: false,
        children: []
      }
    ]
  };
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, TreeNodeComponent
      ],
      imports: [FormsModule]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    component.selectedTreeNode = treeInput;
    component.output = true;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'IndeterminateTree'`, () => {
    fixture = TestBed.createComponent(AppComponent);

    const app = fixture.debugElement.componentInstance;
    expect(app.Title).toEqual('IndeterminateTree');
  });
  it('should have the h4 tag', () => {
     fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.heading')).toBeTruthy();
  });
  it('should hide diplay of output contents if output is false', () => {
     fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
     expect(fixture.debugElement.query(By.css('.output'))).toBeNull();

  });
});
