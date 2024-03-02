import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoListComponent } from './demo-list.component';

describe('DemoListComponent', () => {
  let component: DemoListComponent;
  let fixture: ComponentFixture<DemoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoListComponent]
    });
    fixture = TestBed.createComponent(DemoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
