import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutstructureComponent } from './layoutstructure.component';

describe('LayoutstructureComponent', () => {
  let component: LayoutstructureComponent;
  let fixture: ComponentFixture<LayoutstructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoutstructureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutstructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
